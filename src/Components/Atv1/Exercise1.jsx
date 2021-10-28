import React from 'react';
import './Exercise1.css';

function Exercise1() {
    return (
        <>
        
        <div className="main-header">
        
            <div className="img-header">
                <img src="./img/pp.jfif" alt="pp" className='pers-image'/>
            </div>
            <div className="name-text"><h1>Matheus Antonelli</h1><hr/></div>
            <div className="info">
                <p><img src="./img/location.png" alt="loc" className="icon" /> Foz do Iguaçu - PR</p>
                <hr/>
                <p><img src="./img/mail.png" alt="mail" className="icon" />Matheusantonelli@alunos.utfpr.edu.br</p>
            </div>
        </div>


        <div className="main-body">
            <hr />
            <p className="body-text"><h1>Sobre mim:</h1> Ola, me chamo Matheus Antonelli de Oliveira, sou discente do 3º periodo de agronomia da Universidade
             Tecnológica Federal do Paraná.</p>
            <hr />
            <p className="body-text"><h1>Interesses:</h1>- Arduino <br/>- JavaScript <br/>- ReactJS <br/>- Java</p>
            <hr />
            <p className="body-text"><h1>Objetivos:</h1>- Aprender a materia de Linguagem de Estruturação / Apresentação de Conteúdos. </p>
        </div>
        </>
    )
}

export default Exercise1
