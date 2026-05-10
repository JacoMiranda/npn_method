# NPN Methodology — Prenatal Virtual Sensor Framework

**Author**: Jacó Miranda  
**Status**: Closed for Peer Review (CBIS 2026)

This repository contains the implementation and methodological documentation of the NPN framework, a virtual sensor methodology for prenatal care adequacy assessment based on weighted clinical indicators.

The methodology synthesizes 65 prenatal clinical observation points into normalized continuous indicators designed for healthcare monitoring and future supervised machine learning applications in gestational risk classification.

---

## Resumo do Projeto (Metodologia NPN)

Algoritmos de aprendizado de máquina aplicados à saúde materno-infantil dependem de variáveis preditoras que capturem a oportunidade temporal dos cuidados clínicos. Este projeto propõe a especificação de **Sensores Virtuais** — instrumentos de medição definidos por software — que sintetizam múltiplos pontos de observação clínica do cuidado pré-natal em índices contínuos e normalizados, prontos para algoritmos de estratificação de risco gestacional.

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

## Academic Citation & Licensing

Any academic, institutional or commercial use must properly cite the original authorship and repository. The intellectual property is preserved as evidence of primary authorship and methodological evolution. 

Please refer to the `LICENSE` file for strict academic attribution terms under the MIT framework with an Explicit Citation Clause.

*Repositório criado como anexo técnico-metodológico para avaliação por pares do XXI Congresso Brasileiro de Informática em Saúde (CBIS'26).*
