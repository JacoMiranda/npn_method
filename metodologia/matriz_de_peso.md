# Matriz Completa: Dicionário de Relevância Clínico-Temporal (Camada 3)

A **Matriz de Peso** constitui a Camada 3 do modelo de Sensores Virtuais (NPN). Ela é um componente *model-driven* definido por especialistas clínicos para conferir relevância diferenciada a cada ponto de observação ao longo da trajetória gestacional.

A tabela abaixo representa a versão integral da matriz utilizada no processamento das 16.817 gestações, sem nenhuma supressão. Ela detalha as variáveis distribuídas nos cuidados essenciais da QMEVC.

| Categoria / Cuidados Essenciais   | Trimestre   |   Peso Base |   Qtd. Máx (Teto) |   Máx. Habitual (Pts) | Fator de Risco   |   Máx. Alto Risco (Pts) |
|:----------------------------------|:------------|------------:|------------------:|----------------------:|:-----------------|------------------------:|
| Consultas Médicas                 | T1          |           7 |                 2 |                    14 | x2               |                      28 |
| Consultas Médicas                 | T2          |           5 |                 2 |                    10 | x2               |                      20 |
| Consultas Médicas                 | T3          |           6 |                 3 |                    18 | x2               |                      36 |
| Consultas de Enfermagem           | T1          |           7 |                 2 |                    14 | x1               |                      14 |
| Consultas de Enfermagem           | T2          |           5 |                 2 |                    10 | x1               |                      10 |
| Consultas de Enfermagem           | T3          |           6 |                 3 |                    18 | x1               |                      18 |
| Consultas de Ginecologista        | T1          |           1 |                 1 |                     1 | x3               |                       3 |
| Consultas de Ginecologista        | T2          |           1 |                 1 |                     1 | x3               |                       3 |
| Consultas de Ginecologista        | T3          |           1 |                 1 |                     1 | x3               |                       3 |
| Outros Profissionais              | T1, T2, T3  |           1 |                 1 |                     1 | x1               |                       1 |
| Saúde Bucal (Odonto)              | T1, T2, T3  |           2 |                 1 |                     2 | x1               |                       2 |
| Consulta de Puerpério             | T0          |           1 |                 2 |                     2 | x2               |                       4 |
| Teste Rápido: Gravidez            | T1, T2, T3  |           1 |                 1 |                     1 | x1               |                       1 |
| Teste Rápido: Sífilis             | T1          |           2 |                 1 |                     2 | x1               |                       2 |
| Teste Rápido: Sífilis             | T2          |           2 |                 1 |                     2 | x1               |                       2 |
| Teste Rápido: Sífilis             | T3          |           3 |                 1 |                     3 | x1               |                       3 |
| Teste Rápido: HIV                 | T1          |           2 |                 1 |                     2 | x1               |                       2 |
| Teste Rápido: HIV                 | T2          |           2 |                 1 |                     2 | x1               |                       2 |
| Teste Rápido: HIV                 | T3          |           3 |                 1 |                     3 | x1               |                       3 |
| Sorologia: Hepatite (A/B/C)       | T1          |           2 |                 1 |                     2 | x1               |                       2 |
| Sorologia: Hepatite (A/B/C)       | T2          |           2 |                 1 |                     2 | x1               |                       2 |
| Sorologia: Hepatite (A/B/C)       | T3          |           3 |                 1 |                     3 | x1               |                       3 |
| Exame de Malária                  | T1, T2, T3  |           1 |                 1 |                     1 | x1               |                       1 |
| Hemograma                         | T1          |           1 |                 1 |                     1 | x1               |                       1 |
| Hemograma                         | T2          |           1 |                 1 |                     1 | x2               |                       2 |
| Hemograma                         | T3          |           3 |                 1 |                     3 | x3               |                       9 |
| Avaliação de Exames               | T1, T2, T3  |           4 |                 1 |                     4 | x2               |                       8 |
| Vacinação: dTpa                   | T1          |           1 |                 1 |                     1 | x1               |                       1 |
| Vacinação: dTpa                   | T2          |           2 |                 1 |                     2 | x1               |                       2 |
| Vacinação: dTpa                   | T3          |           1 |                 1 |                     1 | x1               |                       1 |
| Vacinação: Influenza              | T1, T2, T3  |           1 |                 1 |                     1 | x1               |                       1 |
| Vacinação: Hep. B                 | T1, T2, T3  |           1 |                 1 |                     1 | x1               |                       1 |
| Suplementação                     | T1, T2, T3  |           1 |                 1 |                     1 | x2               |                       2 |
| Visita do ACS                     | T1          |           1 |                 1 |                     1 | x1               |                       1 |
| Visita do ACS                     | T2          |           1 |                 1 |                     1 | x1               |                       1 |
| Visita do ACS                     | T3          |           1 |                 2 |                     2 | x2               |                       4 |
| Aferição: PA (Boas Práticas)      | T1          |           2 |                 4 |                     8 | x2               |                      16 |
| Aferição: PA (Boas Práticas)      | T2          |           3 |                 4 |                    12 | x2               |                      24 |
| Aferição: PA (Boas Práticas)      | T3          |           4 |                 6 |                    24 | x3               |                      72 |
| Aferição: Peso/Altura             | T1, T2      |           1 |                 4 |                     4 | x1               |                       4 |
| Aferição: Peso/Altura             | T3          |           1 |                 6 |                     6 | x1               |                       6 |
| Visita ACS (Puerpério)            | T0          |           2 |                 2 |                     4 | x2               |                       8 |
| Comorbidade: Hipertensão          | T1          |           1 |                 2 |                     2 | x3               |                       6 |
| Comorbidade: Hipertensão          | T2          |           1 |                 2 |                     2 | x2               |                       4 |
| Comorbidade: Hipertensão          | T3          |           1 |                 3 |                     3 | x2               |                       6 |
| Comorbidade: Diabetes             | T1          |           1 |                 2 |                     2 | x3               |                       6 |
| Comorbidade: Diabetes             | T2          |           1 |                 2 |                     2 | x2               |                       4 |
| Comorbidade: Diabetes             | T3          |           1 |                 3 |                     3 | x3               |                       9 |

> O arquivo bruto está disponível em formato CSV: [matriz_de_peso.csv](matriz_de_peso.csv)
