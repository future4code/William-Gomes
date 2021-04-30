import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import Cadastro from '../components/Cadastro';
import Posts from '../components/Posts';
import createPost from '../components/CreatPost';
import PostComentarios from '../components/PostComentarios';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <LoginPage />
        </Route>

        <Route exact path="/cadastro" component={Cadastro} />

        <Route exact path="/posts" component={Posts} />

        <Route exact path="/posts/:id" component={PostComentarios} />

        <Route exact path="/create" component={createPost} />


        <Route>
          <p>Erro 404: página não encontrada</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;