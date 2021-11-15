import React from 'react'
import About from '../../Components/AboutLession/About'
import Navbar from '../../Components/Navbar/Navbar'

function Legis() {
    return (
        <>
  
             <Navbar/>
             <About
             src='/img/Etica.jpg'
             title="Ética, Legislação Agrária e Ambiental"
             text="A disciplina de Ética, Legislação Agrária e Ambiental faz com que o estudante seja capaz de discutir a legislação agrária
             e ambiental do país, interpretar diferentes correntes de pensamentos que influenciam na promulgação de leis ambientais."
             person='Reginaldo César Pinheiro'
             mail="N/A"
             next="/disciplina/genetica"
             previous="/disciplina/classificacao-solo"
             />
        </>
    )
}

export default Legis
