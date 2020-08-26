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
  }, []);

  /**
   * funcoes que seriam usadas para deletar e editar e adicionar do carro
   *
   *
   * const adicionarCarrinho = useCallback((data: CarList) => {
    console.log('Adicionando novo carrinho');
  }, []);
  const editarInfoCarro = useCallback((data: CarList) => {
    console.log('Editar carrinho');
  }, []);
  const deletarCarrinho = useCallback((data: CarList) => {
    console.log('Deletar carrinho');
      }, []);
   *
   */

  const listaPequisaCarrinho = useCallback(data => {
    console.log('Objeto dentro do context => ', data);
    setlistaCarrosPesquisa(data);
  }, []);
  const observadorCampo = useCallback(check => {
    setDirty(check);
  }, []);

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
      }}
    >
      {children}
    </ListaCarosContext.Provider>
  );
};
