import React from 'react'
import About from '../../Components/AboutLession/About'
import Navbar from '../../Components/Navbar/Navbar'

function Genetica() {
    return (
        <>
            <Navbar/>
            <About
            src='/img/Genetic.jpg'
             title="Genética Básica"
             text="Na disciplina de gentica o aluno aprende a identificar as causas da variação fenotípica das plantas e dos animais, qualidade,
             hereditariedade da produtividade e outras diversas caracteristicas agronômicas que vão determinando o controle genético, o efeito ambiental e suas interações."
             person='Glauco Vieira Miranda'
             mail="N/A"
             next="/disciplina/topografia"
             previous="/disciplina/etica"
             />            
        </>
    )
}

export default Genetica
