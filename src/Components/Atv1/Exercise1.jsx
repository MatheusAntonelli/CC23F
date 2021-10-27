import React from 'react';
import './Exercise1.css';

function Exercise1() {
    return (
        <>
        
        <div className="main-header">
        
            <div className="img-header">
                <img src="./img/pp.jfif" alt="" className='pers-image'/>
            </div>
            <div className="name-text"><h1>Matheus Antonelli</h1><hr/></div>
            <div className="info">
                <p><img src="./img/location.png" className="icon" /> Foz do Iguaçu - PR</p>
                <hr/>
                <p><img src="./img/mail.png" className="icon" />Matheusantonelli@alunos.utfpr.edu.br</p>
            </div>
        </div>


        <div className="main-body">
            <hr />
            <p className="body-text"><h1>Sobre mim:</h1> Ola, me chamo Matheus Antonelli de Oliveira, sou estudante do 3º periodo de agronomia da Universidade
             Tecnológica Federal do Paraná</p>
            <hr />
            <p className="body-text"><h1>Interesses</h1>: Arduino, JavaScript, ReactJS</p>
        </div>
        
        </>
    )
}

export default Exercise1
