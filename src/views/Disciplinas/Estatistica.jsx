import React from 'react'
import About from '../../Components/AboutLession/About'
import Navbar from '../../Components/Navbar/Navbar'

function Estatistica() {
    return (
        <div>
        <Navbar></Navbar>
          <About
             src='/img/Estatistica.jpg'
             title="Estatística Aplicada"
             text="A disciplina de estatistica nos permite selecionar corretamente as ferramentas e os conceitos estatísticos  para interpretar
             dados, construir gráficos e tabelas, estimar parâmetros populacionais, conduzir testes de hipoteses e explicar o processo estatistico
             utilizado para a resolução de um determinado problema de engenharia."
             person='Dr. Alessandro Samuel-Rosa'
             mail="N/A"
             />               
        </div>
    )
}

export default Estatistica
