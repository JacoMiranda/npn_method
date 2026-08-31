# NPN Methodology — Prenatal Virtual Sensor Framework

[![Framework](https://shields.io)]()
**Author**: Jacó Miranda  


This repository contains the implementation and methodological documentation of the NPN framework, a virtual sensor methodology for prenatal care adequacy assessment based on weighted clinical indicators.

The methodology synthesizes 65 prenatal clinical observation points into normalized continuous indicators designed for healthcare monitoring and future supervised machine learning applications in gestational risk classification.

---

## Resumo do Projeto (Metodologia NPN)

Algoritmos de aprendizado de máquina aplicados à saúde materno-infantil dependem de variáveis preditoras capazes de representar não apenas as condições clínicas observadas, mas também a **oportunidade temporal dos cuidados** ao longo do acompanhamento gestacional. Entretanto, os dados representativos do atendimento pré-natal são frequentemente heterogêneos, multidimensionais e distribuídos ao longo do tempo, o que pode dificultar sua utilização direta na construção de modelos de estratificação e predição de risco gestacional.

Nesse contexto, este projeto propõe a especificação de **Sensores Virtuais** — instrumentos de medição definidos por software — destinados a sintetizar diferentes pontos de observação clínica do cuidado pré-natal em **índices contínuos, normalizados e semanticamente interpretáveis**. Os Sensores Virtuais representam uma idealização de parte de uma proposta de doutorado e buscam transformar informações clínicas heterogêneas em uma grandeza escalar simplificada, porém dotada de significado semântico.

Esses sensores podem ser vinculados a **índices, taxas, razões e outras métricas**, permitindo a composição de diferentes dimensões do acompanhamento gestacional em representações mais compactas. Dessa forma, podem atuar como mecanismos de **engenharia de características (feature engineering)** e de **redução da dimensionalidade**, sem necessariamente eliminar a informação semântica associada aos dados de origem.

A proposta busca, portanto, estabelecer uma **camada intermediária entre os dados clínicos brutos e os modelos de aprendizado de máquina**, transformando múltiplas observações em variáveis preditoras mais compactas, comparáveis e semanticamente contextualizadas. Com isso, os Sensores Virtuais podem favorecer a representação de aspectos como **tempo, frequência, cobertura e qualidade do acompanhamento pré-natal**, contribuindo para modelos mais robustos de estratificação e predição de risco gestacional.

A metodologia opera em seis camadas:
1. Padrão esperado de cuidado (QMEVC)
2. Captura das variáveis realizadas (VC)
3. Ponderação por Matriz de Peso
4. Índices de Adequação Trimestral (IAT) com efeito de teto
5. Escore composto (NPN, escala 0–9)
6. Sensores comparativos (aderência e efetividade)

![Diagrama da Arquitetura do Modelo](images/npn_metodologia_diagrama_1.png)

---

## Resultados Empíricos (DUM 2025)

Os resultados referem-se ao recorte de gestações finalizadas com DUM em 2025 na rede da SEMSA/Manaus, avaliadas pela metodologia NPN. O modelo operacionalizou Sensores Virtuais capazes de sintetizar dezenas de variáveis clínicas em indicadores contínuos de adequação assistencial. 

Para a análise detalhada da coorte de **16.817 gestações**, da performance dos Índices de Adequação Trimestral (IATs), da demografia e das conclusões metodológicas que embasaram os Sensores Virtuais aplicados, consulte o documento completo:

👉 **[Ler a Análise Detalhada de Resultados Empíricos (SEMSA/Manaus)](docs/empirical_results.md)**

### Gráficos de Resultados

![Análise de Gestação Finalizada (DUM 2025)](images/01_análise_gestacao_finalizada_DUM_2025.png)

![Gráfico NPN/IAT por Idade da Gestação](images/02_grafico_npn_iat_por_idade_gestacao_finalizadas_dum_2025.png)

---

## Organização do Repositório

- `/docs`: Documentação acadêmica e [Análise de Resultados Empíricos](docs/empirical_results.md).
- `/images`: Contém o diagrama arquitetural em alta resolução e os gráficos de resultados da aplicação na coorte.
- `/methodology`: Contém a [Matriz de Peso](methodology/matriz_de_peso.md) em Markdown e CSV, detalhando a ponderação utilizada na Camada 3 do modelo.
- `/examples/web_app`: Contém uma interface interativa de demonstração em HTML, Javascript e CSS, que simula o cálculo em tempo real das camadas operacionais (QMEVC, VC, Matriz de Peso e IATs) rodando diretamente no navegador, sem necessidade de servidores. Se você baixar o repositório e abrir localmente, poderá fazer upload do CSV manualmente.
- `/scripts`: Scripts futuros de extração e manipulação de dados.

---

## Autoria e Equipe Especialista

O *framework* metodológico NPN e sua modelagem computacional foram desenvolvidos primariamente por:

* **Jacó Miranda dos Santos** (Autor / Pesquisador Principal)
  * Doutorando e Mestre em Informática pela Universidade Federal do Amazonas (UFAM), com foco em Inteligência Artificial, Machine Learning e Processamento de Linguagem Natural.
  * Servidor na Diretoria de Inteligência de Dados da Secretaria Municipal de Saúde (SEMSA/Manaus), atuando no desenvolvimento de algoritmos e sistemas de apoio à decisão em saúde digital para o SUS.
  * *Lattes: [http://lattes.cnpq.br/8838867187831091](http://lattes.cnpq.br/8838867187831091)* | *GitHub: [JacoMiranda](https://github.com/JacoMiranda/)*

A **Matriz de Pesos** (Camada 3) foi elaborada e validada mediante o rigor técnico e clínico do seguinte comitê de especialistas, garantindo o alinhamento metodológico com as reais necessidades da linha de frente do SUS e as diretrizes do Ministério da Saúde:

* **Lana de Lourdes Aguiar Lima** – *Médica Ginecologista e Obstetra (Subsecretaria de Gestão da Saúde – SUBGS)*
  * Mestre em Saúde Perinatal (UFRJ) com vasta experiência em gestão pública de alto nível no SUS.
  * Atuou como Diretora do Departamento de Saúde Materno Infantil (DSMI) e Coordenadora-Geral de Ciclos da Vida no **Ministério da Saúde**.
  * Professora de Medicina (UFAM) e membro de Câmaras Técnicas Assessoras Nacionais (Mortalidade Materna, Mielomeningocele, CONITEC). Autora de guias do Ministério da Saúde, como os "Cuidados obstétricos em diabetes mellitus gestacional no Brasil".

* **Lúcia Marques de Freitas** – *Enfermeira Obstetra (Departamento de Atenção Primária – DAP / Saúde da Mulher)*
  * Especialista em Saúde da Família (UFAM) e Gestão da Clínica no SUS (Sírio Libanês).
  * Acumula mais de 20 anos de experiência na SEMSA/Manaus, unindo sólida atuação na assistência de Urgência/Emergência com a gestão técnica e formulação de políticas públicas de Saúde da Mulher desde 2014, liderando estratégias de controle de câncer do colo e mama.

* **Gerda Coêlho da Costa** – *Enfermeira (Departamento de Atenção Primária – DAP / Saúde da Mulher)*
  * Profissional com vasta trajetória na Secretaria Municipal de Saúde de Manaus (SEMSA), atuando diretamente nas áreas de planejamento e execução de ações estratégicas em prol da saúde materno-infantil na Atenção Primária. Referência Técnica do Pré-natal.
 Curso Enfermagem e Obstetrícia, com Habilitação em Enfermagem de Saúde Pública e Habilitação em Enfermagem Obstétrica.
Licenciatura em Enfermagem.
Especialização em Educação Profissional na Área de Saúde: Enfermagem.

---

## Academic Citation & Licensing

Any academic, institutional or commercial use must properly cite the original authorship and repository. The intellectual property is preserved as evidence of primary authorship and methodological evolution. 

Please refer to the `LICENSE` file for strict academic attribution terms under the MIT framework with an Explicit Citation Clause.

