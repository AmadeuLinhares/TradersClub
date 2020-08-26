import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Listagem from '../pages/Listagem';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Cadastro" component={Cadastro} />
      <Route path="/Editar/:id" exact component={Cadastro} />
      <Route path="/Listagem" exact component={Listagem} />
    </Switch>
  );
};

export default Routes;
