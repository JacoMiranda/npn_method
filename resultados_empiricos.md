# Resultados Empíricos: Implementação na SEMSA/Manaus (2025)

A implementação da metodologia NPN (Nível de Pré-Natal) no âmbito da SEMSA/Manaus constituiu uma experiência aplicada de modelagem computacional orientada à avaliação contínua da adequação do cuidado pré-natal na Atenção Primária à Saúde. 

O modelo foi estruturado a partir da construção de uma matriz de peso elaborada conjuntamente com especialistas em saúde da rede municipal, incluindo Gerda Coêlho da Costa e Lúcia Marques de Freitas, do Departamento de Atenção Primária (DAP – Saúde da Mulher), e Lana de Lourdes Aguiar Lima, ginecologista obstetra vinculada à SUBGS (Subsecretaria de Gestão da Saúde). A participação técnica dessas profissionais permitiu converter critérios clínicos e assistenciais do pré-natal em parâmetros quantitativos normalizados, compatíveis com sistemas de monitoramento e análise preditiva.

A metodologia NPN foi concebida como um sistema de Sensores Virtuais, definidos por software, capazes de sintetizar múltiplas variáveis discretas do cuidado pré-natal em indicadores contínuos e comparáveis. O processo metodológico opera em seis camadas integradas: 
1. Especificação do padrão esperado de cuidado conforme idade gestacional; 
2. Captura das variáveis efetivamente realizadas; 
3. Ponderação mediante Matriz de Peso definida por especialistas; 
4. Cálculo dos Índices de Adequação Trimestral (IAT) com aplicação de efeito teto; 
5. Agregação em escore composto NPN, variando de 0 a 9; 
6. Derivação de sensores comparativos de aderência e efetividade do cuidado. 

Ao final, os sensores transformam 65 pontos de observação clínica em vetores padronizados de características (*features*), estruturados para futura ingestão por algoritmos supervisionados de classificação de risco gestacional.

## Análise da Coorte e Resultados Observados

Os resultados observados nas imagens analisadas demonstram o potencial da metodologia tanto para monitoramento assistencial quanto para vigilância em saúde. O painel consolidado identificou **16.817 gestações avaliadas**, das quais **3.227 (19%) estão classificadas como de alto risco** no sistema e-SUS-PEC.

A análise das gestações finalizadas revelou **média geral de NPN igual a 2,3**, classificada como insuficiente dentro da escala metodológica proposta. Além disso, 5.703 gestações finalizadas encontravam-se sem desfecho registrado, o que evidencia fragilidade importante na completude dos dados assistenciais e reforça a utilidade do sensor virtual como mecanismo de auditoria e qualificação da informação em saúde.

A distribuição do NPN demonstrou forte concentração entre os níveis 1 e 4, com pico no escore 3 (3.614 registros), seguido pelos escores 1 (3.504), 2 (3.269) e 4 (2.650). Os níveis superiores de adequação mostraram ocorrência progressivamente menor, havendo apenas 100 registros no nível 6 e praticamente inexistência nos níveis 7, 8 e 9. Esse comportamento sugere predominância de acompanhamento pré-natal parcial, com baixa integralidade assistencial em relação aos critérios esperados pela metodologia.

### Índices de Adequação Trimestral (IAT)
Os Índices de Adequação Trimestral (IAT) apresentaram evolução discreta ao longo da gestação, variando de:
- **25,6%** no 1º trimestre
- **35,4%** no 2º trimestre
- **39,5%** no 3º trimestre

Embora exista incremento progressivo, os percentuais permanecem abaixo do patamar considerado adequado, indicando que parte significativa das ações de cuidado é incorporada tardiamente ou de maneira incompleta durante o seguimento gestacional.

### Perfil e Procedimentos
A análise por faixa etária revelou maior concentração de gestantes entre 20 e 29 anos, com redução progressiva após os 30 anos. Contudo, também foi identificado contingente relevante de adolescentes entre 15 e 19 anos (2.626 registros), grupo tradicionalmente associado a maior vulnerabilidade social e necessidade ampliada de acompanhamento longitudinal. A presença de 676 gestantes acima de 40 anos reforça igualmente a importância de mecanismos automatizados de estratificação e monitoramento clínico.

Entre os cuidados mais frequentes registrados destacaram-se aferição de peso e altura, aferição de pressão arterial, solicitação de testes e exames, consulta de enfermagem e consulta médica. A predominância dessas variáveis indica que os componentes básicos do acompanhamento estão sendo executados, porém a baixa pontuação global do NPN sugere insuficiência na integralidade temporal, repetição periódica ou completude dos demais componentes esperados pela linha de cuidado.

## Conclusão Metodológica

Do ponto de vista metodológico, a experiência demonstrou que a utilização de Sensores Virtuais aplicados ao pré-natal permite transformar dados administrativos dispersos em indicadores clínico-assistenciais interpretáveis, comparáveis e acionáveis para gestão. O modelo mostrou capacidade de identificar lacunas assistenciais, monitorar aderência aos protocolos, detectar padrões de sub-registro e estruturar bases analíticas compatíveis com técnicas futuras de inteligência artificial e aprendizado supervisionado em saúde materno-infantil.

A implementação evidenciou ainda que o NPN não se limita a um indicador estático de produção, mas constitui um mecanismo computacional de inferência assistencial contínua, capaz de apoiar priorização de busca ativa, regulação clínica, vigilância do risco gestacional e avaliação longitudinal da qualidade do cuidado pré-natal na rede municipal de saúde.
