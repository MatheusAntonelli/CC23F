import React from 'react'
import About from '../../Components/AboutLession/About'
import Navbar from '../../Components/Navbar/Navbar'

function Solo() {
    return (
        <>
            <Navbar/>
            <About
             src='/img/Soil.jpg'
             title="Classificação de Solos"
             text="A disciplina nos proporciona um conhecimento em analise de dados e informações sobre os diversos recursos do solo,
             selecionando variaveis, materiais e ferramentas que se apliquem ao contexto analisado, demonstando atitude cooperativa e com
             comunicação efetiva."
             person='Dr. Alessandro Samuel-Rosa'
             mail="N/A"
             next="/disciplina/etica"
             previous="/disciplina/agrometeorologia-climatologia/"
             />
        </>
    )
}

export default Solo
