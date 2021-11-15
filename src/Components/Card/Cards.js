import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <section id='features'>
      
        <div className='cards'>
      <h1>Disciplinas que estou cursando</h1>
       
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img/Agromet.jpg'
              text='Agrometeorologia e Climatologia'
              label='Agronomia'
              path='/disciplina/agrometeorologia-climatologia/'
            />
            <CardItem
              src='img/soil.jpg'
              text='Classificação Do Solo'
              label='Agronomia'
              path='/disciplina/classificacao-solo'
            />
            <CardItem
              src='img/Etica.jpg'
              text='Ética, Legislação Agrária E Ambiental'
              label='Agronomia'
              path='/disciplina/etica'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img/Genetic.jpg'
              text='Genética Básica'
              label='Agronomia'
              path='/disciplina/genetica'
            />
            <CardItem
              src='img/Topo.jpg'
              text='Topografia 1'
              label='Agronomia'
              path='/disciplina/topografia'
            />
            <CardItem
              src='img/Sistematica.jpg'
              text='Sistemática Vegetal'
              label='Agronomia'
              path='/disciplina/sistematica-vegetal'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='img/Sociologia.jpg'
              text='Sociologia Rural'
              label='Agronomia'
              path='/disciplina/sociologia-rural'
            /> 
            <CardItem
              src='img/Estatistica.jpg'
              text='Estatística Aplicada'
              label='Agronomia'
              path='/disciplina/estatistica'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='img/CC.jpg'
              text='Linguagem De Estruturação E Apresentação De Conteúdos'
              label='Ciencia da Computação'
              path='/disciplina/linguagem-estruturacao'
            />
            <CardItem
              src='img/Bioquimica.jpg'
              text='Bioquímica Geral'
              label='Agronomia'
              path='/disciplina/bioquimica'
            />           
          </ul>
          <p>A maioria das informações sobre as materias foram extraidas do plano de ensino que pode ser encontrado no Moodle de cada materia.</p>
        <p>O nome de todos os professores das presentes disciplinas foi citados de acordo com o exibido na plataforma Moodle.</p>
        </div>
      </div>
    </div>
    </section>
    
  );
}

export default Cards;