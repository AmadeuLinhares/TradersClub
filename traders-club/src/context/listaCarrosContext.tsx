import React, { createContext, useCallback, useState, useEffect } from 'react';
import Api from '../services/api';

export interface CarList {
  id: string;
  idBrand: string;
  title: string;
  model: string;
  brand: string;
  year: string;
  color: string;
  km: string;
  price: string;
}

interface ListagemInterface {
  dataCar: CarList[];
  dataPesquisa: CarList[];
  listaPequisaCarrinho(data: CarList[]): void;
  observadorCampo(check: boolean): void;
  campoPesquisa: boolean;

  // editarInfoCarro(data: CarList): void;
  // editarCadastro: boolean;
  // isCadastroEditar(check: boolean): void;
}

export const ListaCarosContext = createContext<ListagemInterface>(
  {} as ListagemInterface,
);

export const ListaCarrosProvider: React.FC = ({ children }) => {
  const [listaCarros, setListaCarros] = useState([]);
  const [listaCarrosPesquisa, setlistaCarrosPesquisa] = useState([]);
  const [dirty, setDirty] = useState(false);
  // const [editarCadastroState, setEditarCadastroState] = useState(false);

  const listagemCarros = useCallback(async () => {
    const { data } = await Api.get('/cars');
    setListaCarros(data);
    console.log('Resposta API', data);
  }, []);

  const adicionarCarrinho = useCallback((data: CarList) => {
    console.log('Adicionando novo carrinho');
  }, []);
  const editarInfoCarro = useCallback((data: CarList) => {
    console.log('Adicionando novo carrinho');
  }, []);
  const deletarCarrinho = useCallback((data: CarList) => {
    console.log('Adicionando novo carrinho');
  }, []);

  const listaPequisaCarrinho = useCallback(data => {
    console.log('Objeto dentro do context => ', data);
    setlistaCarrosPesquisa(data);
  }, []);
  const observadorCampo = useCallback(check => {
    setDirty(check);
  }, []);

  // const isCadastroEditar = useCallback(check => {
  //   setEditarCadastroState(check);
  // }, []);

  useEffect(() => {
    listagemCarros();
  }, []);

  return (
    <ListaCarosContext.Provider
      value={{
        dataCar: listaCarros,
        dataPesquisa: listaCarrosPesquisa,
        listaPequisaCarrinho,
        observadorCampo,
        campoPesquisa: dirty,
        // editarInfoCarro,
        // isCadastroEditar,
        // editarCadastro: editarCadastroState,
      }}
    >
      {children}
    </ListaCarosContext.Provider>
  );
};
