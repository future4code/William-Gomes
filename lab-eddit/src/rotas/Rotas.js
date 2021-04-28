import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import Cadastro from '../components/Cadastro';
import Posts from '../components/Posts';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <LoginPage />
        </Route>

        <Route exact path="/cadastro" component={Cadastro} />

        <Route exact path="/posts" component={Posts} />
       

        <Route>
          <p>Erro 404: página não encontrada</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;