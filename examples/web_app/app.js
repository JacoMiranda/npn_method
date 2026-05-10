document.addEventListener('DOMContentLoaded', () => {
    const CSV_URL = '../metodologia/matriz_de_peso.csv';
    let matrizPesos = [];
    
    // Parâmetros do modelo
    let teto_T1 = 0;
    let teto_T2 = 0;
    let teto_T3 = 0;
    let teto_T0 = 0;

    const domEls = {
        container: document.getElementById('trimestres-container'),
        riscoRadios: document.getElementsByName('risco'),
        valNpnA: document.getElementById('val-npn-a'),
        valNpnE: document.getElementById('val-npn-e'),
        valIatT1: document.getElementById('val-iat-t1'),
        valIatT2: document.getElementById('val-iat-t2'),
        valIatT3: document.getElementById('val-iat-t3'),
        valIatT0: document.getElementById('val-iat-t0'),
        valEfetividade: document.getElementById('val-efetividade')
    };

    function processData(results) {
        matrizPesos = results.data.filter(row => row['Procedimento Clínico'] || row['Categoria / Cuidados Essenciais']);
        const procKey = matrizPesos[0]['Procedimento Clínico'] ? 'Procedimento Clínico' : 'Categoria / Cuidados Essenciais';
        matrizPesos = matrizPesos.filter(row => row[procKey]);
        inicializarCalculadora(procKey);
    }

    // 1. Tentar carregar via fetch (Funciona no GitHub Pages ou Servidor Local)
    Papa.parse(CSV_URL, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: processData,
        error: function(error) {
            console.warn("Erro de CORS ou arquivo não encontrado via Fetch. Exibindo fallback offline.", error);
            domEls.container.innerHTML = '';
            document.getElementById('fallback-container').style.display = 'block';
            
            // Ativar input de arquivo manual
            document.getElementById('csv-upload').addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    Papa.parse(file, {
                        header: true,
                        dynamicTyping: true,
                        complete: function(results) {
                            document.getElementById('fallback-container').style.display = 'none';
                            processData(results);
                        }
                    });
                }
            });
        }
    });

    function inicializarCalculadora(procKey) {
        // Calcular os Tetos (QMEVC) de cada trimestre
        // No CSV completo, a coluna "Peso Base" x "Qtd. Máx (Teto)" nos dá o teto. 
        // Mas a lógica do Parte 3 diz que o Teto é o Máx Habitual (Pts) para risco habitual.
        // Vamos varrer a matriz e separar T1, T2, T3
        
        let procsT1 = [];
        let procsT2 = [];
        let procsT3 = [];
        let procsT0 = [];

        matrizPesos.forEach((row, index) => {
            const nome = row[procKey];
            const trimestres = String(row['Trimestre'] || '');
            const pesoBase = parseFloat(row['Peso Base']) || 0;
            const ptsHabitual = parseFloat(row['Máx. Habitual (Pts)']) || 0;
            
            // Se o CSV for o simples antigo
            const pesoT1 = row['Peso_T1'] !== undefined ? row['Peso_T1'] : (trimestres.includes('T1') ? ptsHabitual : 0);
            const pesoT2 = row['Peso_T2'] !== undefined ? row['Peso_T2'] : (trimestres.includes('T2') ? ptsHabitual : 0);
            const pesoT3 = row['Peso_T3'] !== undefined ? row['Peso_T3'] : (trimestres.includes('T3') ? ptsHabitual : 0);
            const pesoT0 = row['Peso_T0'] !== undefined ? row['Peso_T0'] : (trimestres.includes('T0') ? ptsHabitual : 0);

            if (pesoT1 > 0) {
                teto_T1 += pesoT1;
                procsT1.push({ id: `t1_${index}`, nome, peso: pesoT1, trimestre: 'T1' });
            }
            if (pesoT2 > 0) {
                teto_T2 += pesoT2;
                procsT2.push({ id: `t2_${index}`, nome, peso: pesoT2, trimestre: 'T2' });
            }
            if (pesoT3 > 0) {
                teto_T3 += pesoT3;
                procsT3.push({ id: `t3_${index}`, nome, peso: pesoT3, trimestre: 'T3' });
            }
            if (pesoT0 > 0) {
                teto_T0 += pesoT0;
                procsT0.push({ id: `t0_${index}`, nome, peso: pesoT0, trimestre: 'T0' });
            }
        });

        // Renderizar a interface
        renderizarColuna('1º Trimestre', procsT1);
        renderizarColuna('2º Trimestre', procsT2);
        renderizarColuna('3º Trimestre', procsT3);
        renderizarColuna('Puerpério', procsT0);

        // Adicionar event listeners
        document.querySelectorAll('input[type="checkbox"]').forEach(chk => {
            chk.addEventListener('change', calcularResultados);
        });
        
        domEls.riscoRadios.forEach(radio => {
            radio.addEventListener('change', calcularResultados);
        });

        calcularResultados();
    }

    function renderizarColuna(titulo, procedimentos) {
        if (procedimentos.length === 0) return;
        
        if (domEls.container.querySelector('.loader')) {
            domEls.container.innerHTML = '';
        }

        const col = document.createElement('div');
        col.className = 'trimestre-col';
        
        const h3 = document.createElement('h3');
        h3.textContent = titulo;
        col.appendChild(h3);

        procedimentos.forEach(p => {
            const label = document.createElement('label');
            label.className = 'checkbox-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = p.peso;
            checkbox.dataset.trimestre = p.trimestre;
            
            const textDiv = document.createElement('div');
            textDiv.className = 'item-text';
            
            const nameSpan = document.createElement('span');
            nameSpan.className = 'item-name';
            nameSpan.textContent = p.nome;
            
            const weightSpan = document.createElement('span');
            weightSpan.className = 'item-weight';
            weightSpan.textContent = `Peso: ${p.peso}`;

            textDiv.appendChild(nameSpan);
            textDiv.appendChild(weightSpan);
            
            label.appendChild(checkbox);
            label.appendChild(textDiv);
            col.appendChild(label);
        });

        domEls.container.appendChild(col);
    }

    function calcularResultados() {
        let pontosT1 = 0;
        let pontosT2 = 0;
        let pontosT3 = 0;
        let pontosT0 = 0;

        document.querySelectorAll('input[type="checkbox"]:checked').forEach(chk => {
            const val = parseFloat(chk.value);
            if (chk.dataset.trimestre === 'T1') pontosT1 += val;
            if (chk.dataset.trimestre === 'T2') pontosT2 += val;
            if (chk.dataset.trimestre === 'T3') pontosT3 += val;
            if (chk.dataset.trimestre === 'T0') pontosT0 += val;
        });

        // Camada 4: IAT (Efeito Teto)
        const iatT1 = teto_T1 > 0 ? Math.min(pontosT1 / teto_T1, 1.0) : 0;
        const iatT2 = teto_T2 > 0 ? Math.min(pontosT2 / teto_T2, 1.0) : 0;
        const iatT3 = teto_T3 > 0 ? Math.min(pontosT3 / teto_T3, 1.0) : 0;
        const iatT0 = teto_T0 > 0 ? Math.min(pontosT0 / teto_T0, 1.0) : 0;

        // Camada 5: Estrato de Risco (S_BASE)
        // No artigo, o NPN é FLOOR( Σ(IAT*Teto) / S_Base * 9 )
        // Para simplificar a simulação no JS sem precisar das fórmulas complexas com fator multiplicador,
        // Usaremos uma base empírica simplificada.
        const isAltoRisco = document.querySelector('input[name="risco"]:checked').value === 'alto';
        
        // Fator de escala: Habitual = divisor menor (atinge NPN 9 mais fácil)
        const somaTeto = teto_T1 + teto_T2 + teto_T3 + teto_T0;
        const s_base = isAltoRisco ? somaTeto : (somaTeto * 0.7); 

        const somaAlcancada = (iatT1 * teto_T1) + (iatT2 * teto_T2) + (iatT3 * teto_T3) + (iatT0 * teto_T0);
        const somaEsperada = teto_T1 + teto_T2 + teto_T3 + teto_T0;

        // NPN Alcançado
        let npn_a = Math.floor((somaAlcancada / s_base) * 9);
        if (npn_a > 9) npn_a = 9;
        
        // NPN Esperado (Meto dinâmica)
        let npn_e = Math.floor((somaEsperada / s_base) * 9);
        if (npn_e > 9) npn_e = 9;

        // Sensor Efetividade
        const efetividade = npn_e > 0 ? (npn_a / npn_e) : 0;

        // Atualizar UI
        domEls.valIatT1.textContent = iatT1.toFixed(2);
        domEls.valIatT2.textContent = iatT2.toFixed(2);
        domEls.valIatT3.textContent = iatT3.toFixed(2);
        if (domEls.valIatT0) domEls.valIatT0.textContent = iatT0.toFixed(2);
        domEls.valNpnA.textContent = npn_a;
        domEls.valNpnE.textContent = npn_e;
        domEls.valEfetividade.textContent = efetividade.toFixed(2);
    }
});
