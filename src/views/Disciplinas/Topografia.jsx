import React from 'react'
import About from '../../Components/AboutLession/About'
import Navbar from '../../Components/Navbar/Navbar'
function Topografia() {
    return (
        <>
        <Navbar></Navbar>
          <About
             src='/img/Topo.jpg'
             title="Topografia I"
             text="A disciplina de Topografia 1 ensina como aplicar os fundamentos de planimetria e altimetria , selecionar os esquipamentos
             topograficos, computar os dados coletados aplicando as metodologias pertinentes de forma acurada e representar os diversos tipos de aplicações"
             person='Dr. Vinícius Amadeu Stuani Pereira'
             mail="N/A"
             next="/disciplina/sistematica-vegetal"
             previous="/disciplina/genetica"
             />          
        </>
    )
}

export default Topografia
