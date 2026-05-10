# Matriz de Peso (Camada 3)

A **Matriz de Peso** constitui a Camada 3 do modelo de Sensores Virtuais (NPN). Ela é um componente *model-driven* definido por especialistas clínicos para conferir relevância diferenciada a cada ponto de observação ao longo da trajetória gestacional.

Como descrito no artigo, um mesmo procedimento possui pesos distintos dependendo do trimestre em que é realizado. Por exemplo, o rastreio de sífilis (VDRL/Teste Rápido) possui peso crítico (3.0) no 1º Trimestre para diagnóstico precoce, reduzindo seu peso nos trimestres subsequentes. Já procedimentos como a vacina dTpa só adquirem peso a partir do 2º trimestre.

## Exemplo Ilustrativo da Matriz

A tabela abaixo apresenta um extrato ilustrativo de como os pesos são distribuídos para alguns dos procedimentos avaliados no e-SUS PEC:

| Procedimento Clínico | Peso T1 | Peso T2 | Peso T3 | Peso T0 | Categoria |
|----------------------|---------|---------|---------|---------|-----------|
| Consulta Assistencial| 2.0 | 2.0 | 2.0 | 0.0 | Consulta |
| Teste Rápido de Sífilis| 3.0 | 1.5 | 1.0 | 0.0 | Rastreio |
| Teste Rápido de HIV | 3.0 | 1.5 | 1.0 | 0.0 | Rastreio |
| Exame de Urina | 2.0 | 2.0 | 2.0 | 0.0 | Laboratorial|
| Glicemia em Jejum | 2.5 | 1.0 | 1.0 | 0.0 | Laboratorial|
| Ultrassonografia | 2.5 | 2.0 | 1.5 | 0.0 | Imagem |
| Vacina dTpa | 0.0 | 3.0 | 3.0 | 0.0 | Imunização |
| Aferição de PA | 1.0 | 1.0 | 2.0 | 0.0 | Monitorização|
| Avaliação de Peso/IMC| 1.0 | 1.0 | 1.0 | 0.0 | Monitorização|
| Consulta Puerperal | 0.0 | 0.0 | 0.0 | 3.0 | Puerpério |

> **Nota:** A versão completa da matriz utilizada no processamento das 16.817 gestações contém a distribuição para todas as 65 variáveis distribuídas nos 23 cuidados essenciais da QMEVC.

O arquivo em formato CSV pode ser acessado [aqui](matriz_de_peso.csv).
