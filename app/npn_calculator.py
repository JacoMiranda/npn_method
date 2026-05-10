import streamlit as st
import pandas as pd
import numpy as np

# Configuração da página
st.set_page_config(page_title="Calculadora NPN", page_icon="🧮", layout="centered")

st.title("🧮 Calculadora Metodológica NPN")
st.markdown("""
Esta interface simula as 6 camadas do modelo de Sensores Virtuais (NPN). 
Selecione as **Variáveis do Cuidado (VC)** realizadas pela gestante em cada trimestre para visualizar como o Escore NPN e os Índices de Adequação Trimestral (IATs) são computados.
""")

# Matriz de Peso (Exemplo simplificado baseado no artigo)
matriz_peso = {
    'Consultas Assistenciais': {'T1': 2.0, 'T2': 2.0, 'T3': 2.0, 'T0': 0.0},
    'Teste de Sífilis': {'T1': 3.0, 'T2': 1.5, 'T3': 1.0, 'T0': 0.0},
    'Teste de HIV': {'T1': 3.0, 'T2': 1.5, 'T3': 1.0, 'T0': 0.0},
    'Exame de Urina': {'T1': 2.0, 'T2': 2.0, 'T3': 2.0, 'T0': 0.0},
    'Ultrassonografia': {'T1': 2.5, 'T2': 2.0, 'T3': 1.5, 'T0': 0.0},
    'Vacina dTpa': {'T1': 0.0, 'T2': 3.0, 'T3': 3.0, 'T0': 0.0},
    'Consulta Puerperal': {'T1': 0.0, 'T2': 0.0, 'T3': 0.0, 'T0': 3.0}
}

df_pesos = pd.DataFrame(matriz_peso).T

# Parâmetros Base do Modelo
TETO_PONDERADO_T1 = df_pesos['T1'].sum()
TETO_PONDERADO_T2 = df_pesos['T2'].sum()
TETO_PONDERADO_T3 = df_pesos['T3'].sum()
S_BASE_HABITUAL = 4  # Normalizador de base para risco habitual (simplificado)
S_BASE_ALTO_RISCO = 6 # Normalizador de base para alto risco

st.sidebar.header("Estrato de Risco (Camada 5)")
risco = st.sidebar.radio("Classificação da Gestante:", ["Risco Habitual", "Alto Risco"])
S_BASE = S_BASE_ALTO_RISCO if risco == "Alto Risco" else S_BASE_HABITUAL

# Coleta de Dados Reais da Gestante (Camada 2 - VC)
st.header("Variáveis do Cuidado (VC) Realizadas")

col1, col2, col3 = st.columns(3)
realizados_T1 = col1.multiselect("Procedimentos no 1º Trimestre", options=list(matriz_peso.keys())[:-2])
realizados_T2 = col2.multiselect("Procedimentos no 2º Trimestre", options=list(matriz_peso.keys())[:-1])
realizados_T3 = col3.multiselect("Procedimentos no 3º Trimestre", options=list(matriz_peso.keys())[:-1])

# Cálculos (Camadas 3, 4, 5 e 6)
def calcular_iat(realizados, trimestre, teto_ponderado):
    pontos = sum([matriz_peso[proc][trimestre] for proc in realizados])
    # Camada 4: Capping (min)
    if teto_ponderado == 0: return 0.0
    return min(pontos / teto_ponderado, 1.0)

iat_t1_a = calcular_iat(realizados_T1, 'T1', TETO_PONDERADO_T1)
iat_t2_a = calcular_iat(realizados_T2, 'T2', TETO_PONDERADO_T2)
iat_t3_a = calcular_iat(realizados_T3, 'T3', TETO_PONDERADO_T3)

# Cálculo do NPN Esperado e Alcançado
npn_e = min(9, np.floor((1.0*TETO_PONDERADO_T1 + 1.0*TETO_PONDERADO_T2 + 1.0*TETO_PONDERADO_T3) / S_BASE * 9))
npn_a = min(9, np.floor((iat_t1_a*TETO_PONDERADO_T1 + iat_t2_a*TETO_PONDERADO_T2 + iat_t3_a*TETO_PONDERADO_T3) / S_BASE * 9))

st.divider()

# Resultados (Vetor de Features)
st.header("Sensores Virtuais (Vetor Final)")

c1, c2, c3, c4 = st.columns(4)
c1.metric("IAT T1 Alcançado", f"{iat_t1_a:.2f}", "Máx: 1.00", delta_color="off")
c2.metric("IAT T2 Alcançado", f"{iat_t2_a:.2f}", "Máx: 1.00", delta_color="off")
c3.metric("IAT T3 Alcançado", f"{iat_t3_a:.2f}", "Máx: 1.00", delta_color="off")
c4.metric("Escore NPN_a", int(npn_a), f"Escore Esperado (NPN_e): {int(npn_e)}", delta_color="off")

# Sensor Comparativo de Efetividade
efetividade = npn_a / npn_e if npn_e > 0 else 0
st.metric("Sensor de Efetividade (NPN_a / NPN_e)", f"{efetividade:.2f}", help="Sintetiza a qualidade global da trajetória.")

st.info("💡 Estes são os indicadores contínuos e normalizados gerados pelas camadas, prontos para consumo por modelos de Machine Learning (Classificação de Risco e Detecção de Sub-registro).")
