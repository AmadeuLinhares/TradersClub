import React, { useCallback, useState, createContext, useEffect } from 'react';
import api from '../services/api';

interface ListaMarcas {
  label: string;
  value: number;
}
interface ListResponse {
  name: string;
  id: number;
}

interface ParametersContext {
  marcas: ListaMarcas[];
}

const MarcasContex = createContext({} as ParametersContext);

const MarcasProvides: React.FC = ({ children }) => {
  const [listMarcas, setListMarcas] = useState({} as ListaMarcas[]);

  const listarMarccas = useCallback(async () => {
    const { data } = await api.get('/brands');

    const dataFormatada: ListaMarcas[] = data.map((m: ListResponse) => ({
      value: m.id,
      label: m.name,
    }));
    setListMarcas(dataFormatada);
    console.log('RESPONSE API MARCAS => ', data);
  }, []);

  useEffect(() => {
    listarMarccas();
  }, []);

  return (
    <MarcasContex.Provider value={{ marcas: listMarcas }}>
      {children}
    </MarcasContex.Provider>
  );
};

export { MarcasContex, MarcasProvides };
