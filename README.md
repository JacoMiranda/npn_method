# Metodologia NPN (Nível de Pré-Natal) — Material Suplementar

Este repositório contém a documentação metodológica suplementar, resultados empíricos, matriz de peso e códigos de demonstração referentes ao artigo **"Sensores Virtuais para Síntese de Variáveis do Cuidado Pré-Natal: Metodologia de Especificação de Índices Preditivos para Aprendizado de Máquina"** (CBIS 2026).

## Resumo do Projeto

Algoritmos de aprendizado de máquina aplicados à saúde materno-infantil dependem de variáveis preditoras que capturem a oportunidade temporal dos cuidados clínicos. Este projeto propõe a especificação de **Sensores Virtuais** — instrumentos de medição definidos por software — que sintetizam 67 pontos de observação clínica do cuidado pré-natal em índices contínuos e normalizados, prontos para algoritmos de estratificação de risco gestacional.

A metodologia opera em seis camadas:
1. Padrão esperado de cuidado (QMEVC)
2. Captura das variáveis realizadas (VC)
3. Ponderação por Matriz de Peso
4. Índices de Adequação Trimestral (IAT) com efeito de teto
5. Escore composto (NPN, escala 0–9)
6. Sensores comparativos (aderência e efetividade)

![Diagrama da Arquitetura do Modelo](img/npn_metodologia_diagrama_1.png)

---

## Resultados Empíricos (DUM 2025)

Os resultados referem-se ao recorte de gestações finalizadas com DUM em 2025 na rede da SEMSA/Manaus, avaliadas pela metodologia NPN (Nível de Pré-Natal). O modelo operacionalizou Sensores Virtuais capazes de sintetizar 65 variáveis clínicas em indicadores contínuos de adequação assistencial. 

Foram analisadas **16.817 gestações**, identificando-se média geral de NPN igual a 2,3 e 19% classificadas como alto risco assistencial. Os Índices de Adequação Trimestral (IAT) apresentaram médias de **25,6% no 1º trimestre, 35,4% no 2º e 39,5% no 3º**, evidenciando aumento progressivo do cuidado ao longo da gestação, porém ainda abaixo do padrão esperado. 

A distribuição do NPN concentrou-se nos níveis 1 a 4, indicando baixa integralidade do acompanhamento pré-natal. Os resultados demonstram potencial da metodologia para monitoramento longitudinal, detecção de sub-registro e estruturação de bases analíticas para modelos supervisionados de risco gestacional.

### Gráficos de Resultados

![Análise de Gestação Finalizada (DUM 2025)](img/01_análise_gestacao_finalizada_DUM_2025.png)

![Gráfico NPN/IAT por Idade da Gestação](img/02_grafico_npn_iat_por_idade_gestacao_finalizadas_dum_2025.png)

---

## Organização do Repositório

- `/img`: Contém o diagrama arquitetural em alta resolução e os gráficos de resultados da aplicação na coorte de 2025.
- `/metodologia`: Contém a [Matriz de Peso](metodologia/matriz_de_peso.md), detalhando a ponderação utilizada na Camada 3 do modelo para cada um dos procedimentos nos trimestres da gestação.
- `/app`: Contém uma interface interativa de demonstração (`npn_calculator.py`) construída em Python (Streamlit), que simula o cálculo em tempo real das camadas operacionais (QMEVC, VC, Matriz de Peso e IATs).

---

*Repositório criado como anexo técnico-metodológico para avaliação por pares do XXI Congresso Brasileiro de Informática em Saúde (CBIS'26).*
