import React from 'react'
import About from '../../Components/AboutLession/About'
import Navbar from '../../Components/Navbar/Navbar'
function Sociologia() {
    return (
        <>
          <Navbar></Navbar>
          <About
             src='/img/Sociologia.jpg'
             title="Sociologia Rural"
             text="O discente quando concluir a disciplina deve ser capaz de examinar a complexidade de diferentes contextos socioeconômicos
             e produtivos da sociedade, construindo hipoteses para explicar a tomada de decisões dos diferentes atoes sociais, articulando conceitos
             teoricos à realidade empírica observada no exercício profissional, de forma ética, legal e respeitosa."
             person='Alessandra Matte'
             mail="N/A"
             next="/disciplina/estatistica"
             previous="/disciplina/sistematica-vegetal"
             />              
        </>
    )
}

export default Sociologia
