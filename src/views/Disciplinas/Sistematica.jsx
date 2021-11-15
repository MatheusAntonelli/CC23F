import React from 'react'
import About from '../../Components/AboutLession/About'
import Navbar from '../../Components/Navbar/Navbar'

function Sistematica() {
    return (
        <>
             <Navbar/>
            <About
            src='/img/Sistematica.jpg'
             title="Sistemática Vegetal"
             text="A disciplina de Sistemática Vegetal faz com que o futuro sistemata; taxonomista ou agronomo consiga descrever especies,
             realizar inventários/ levantamento florístico, elaborar 'Listas vermelhas', compreender as relações de parentescos/ evolutivas entre
             as especies e nomeclatura das mesmas."
             person='Leonardo'
             mail="N/A"
             next="/disciplina/sociologia-rural"
             previous="/disciplina/topografia"
             />         
        </>
    )
}

export default Sistematica
