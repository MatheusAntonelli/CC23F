import React from 'react'
import About from '../../Components/AboutLession/About'
import Navbar from '../../Components/Navbar/Navbar'

function Agrometeorologia() {
    return (
        <>  
            <Navbar/>
            <About
            src='/img/Agromet.jpg'
            title="Agrometeorologia e climatologia"
            text="A disciplina de agrometeorologia é realizada no terceiro período e capacita os estudantes de agronomia a avaliar o efeito
            de elementos climaticos e meteorologicos sobre o planejamento de uso da terra e das operações agrícolas e pecuárias, relacionando
            informações de tempo e clima com os sistemas de produção agropecuário, com decisões sustentáveis e inovadoras."
            person=' Fabrício Correia de Oliveira'
            mail="N/A"
            next="/disciplina/classificacao-solo"
            previous="/disciplina/agrometeorologia-climatologia/"
            />
        </>
    )
}

export default Agrometeorologia
