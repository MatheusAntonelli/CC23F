import React from 'react'
import About from '../../Components/AboutLession/About'
import Navbar from '../../Components/Navbar/Navbar'
function Bioquimica() {
    return (
        <>
             <Navbar></Navbar>
          <About
             src='/img/Bioquimica.jpg'
             title="Bioquímica Geral"
             text="O discente quando concluir a disciplina deve ser capaz de estabelecer relações entre agronomia e bioquímica, integrando
             o conhecimento adquirido sobre os processos biológicos ao nível das transformações moleculares dos constituintes celulares, a compreensão
             dos aspectos gerais do metabolismo celular e suas funções."
             person='Adriana M. Meneghetti'
             mail="N/A"
             next="/disciplina/agrometeorologia-climatologia"
             previous="/disciplina/linguagem-estruturacao"
             />              
        </>
    )
}

export default Bioquimica
