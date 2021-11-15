import React from 'react'
import About from '../../Components/AboutLession/About'
import Navbar from '../../Components/Navbar/Navbar'
function Linguagem() {
    return (
        <>
            <Navbar></Navbar>
          <About
             src='/img/CC.jpg'
             title="Linguagem de Estruturação e Apresentação de Conteúdos"
             text="A disciplina de Linguagem de Estruturação e Apresentação de Conteúdos nos introduz ao começo da internet e seus avanços ao longo dos anos e 
             consegue fazer o aluno compreender como são estruturados websites, plataformas ou sistemas que tem como objetivo de apresentar conteúdos, bem como
             abordar sobre as principais linguagens utilizadas na web como: HTML5, JavaScript e CSS3."
             person='Me. Elenilton Dezengrini'
             mail="N/A"
             previous="/disciplina/estatistica"
             next="/disciplina/bioquimica"
             />               
        </>
    )
}

export default Linguagem
