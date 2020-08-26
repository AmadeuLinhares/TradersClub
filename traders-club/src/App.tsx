import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import GlobalStyles from './Global/styles';
import { ListaCarrosProvider } from './context/listaCarrosContext';
import { MarcasProvides } from './context/marcasContexto';

function App() {
  return (
    <MarcasProvides>
      <ListaCarrosProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyles />
      </ListaCarrosProvider>
    </MarcasProvides>
  );
}

export default App;
