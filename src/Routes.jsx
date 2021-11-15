
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Atv2 from './views/Atv2';
import Agrometeorologia from './views/Disciplinas/Agrometeorologia';
import Bioquimica from './views/Disciplinas/Bioquimica';
import Estatistica from './views/Disciplinas/Estatistica';
import Genetica from './views/Disciplinas/Genetica';
import Legis from './views/Disciplinas/Legis';
import Linguagem from './views/Disciplinas/Linguagem';
import Sistematica from './views/Disciplinas/Sistematica';
import Sociologia from './views/Disciplinas/Sociologia';
import Solo from './views/Disciplinas/Solo';
import Topografia from './views/Disciplinas/Topografia';
import MainPage from './views/MainPage';

function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/atividade-2' exact component={Atv2}/>
                    <Route path='/atividade-2' exact component={Atv2}/>
                    <Route path='/disciplina/agrometeorologia-climatologia' exact component={Agrometeorologia}/>
                    <Route path='/disciplina/classificacao-solo' exact component={Solo}/>
                    <Route path='/disciplina/etica' exact component={Legis}/>
                    <Route path='/disciplina/topografia' exact component={Topografia}/>
                    <Route path='/disciplina/genetica' exact component={Genetica}/>
                    <Route path='/disciplina/sistematica-vegetal' exact component={Sistematica}/>
                    <Route path='/disciplina/sociologia-rural' exact component={Sociologia}/>
                    <Route path='/disciplina/estatistica' exact component={Estatistica}/>
                    <Route path='/disciplina/bioquimica' exact component={Bioquimica}/>
                    <Route path='/disciplina/linguagem-estruturacao' exact component={Linguagem}/>
                </Switch>
            </Router>
        </>
    )
}

export default Routes;