import React, { useContext, useState, useEffect, useCallback } from 'react';
import Select, { Styles, StylesConfig } from 'react-select';
import { useParams, HashRouterProps, useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import { MarcasContex } from '../../context/marcasContexto';
import { ListaCarosContext, CarList } from '../../context/listaCarrosContext';
import {
  ContainerTextError,
  ContainerInputs,
  NomeVeiculo,
  ModeloAno,
  Marca,
  Caracteristicas,
  ContainerCadastro,
  ContainerButtons,
  RemoveButtons,
  SavedButtons,
} from './styles';

import Input from '../../components/Inputs/Text';
// import Select from '../../components/Inputs/Select';
import Button from '../../components/Buttons';

interface ListaMarcas {
  label: string;
  value: number;
}

const Cadastro: React.FC = props => {
  const { marcas } = useContext(MarcasContex);
  const { dataCar } = useContext(ListaCarosContext);
  const [marcaSelecionada, setMarcaSelecionada] = useState({} as ListaMarcas);
  const [editarDados, setEditarDados] = useState([] as CarList[]);

  const [titulo, setTitulo] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [marcaCheck, setMarcaCheck] = useState({} as ListaMarcas);
  const [cor, setCor] = useState('');
  const [km, setKm] = useState('');
  const [Valor, setValor] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const varificaEdicao = useCallback(() => {
    const editarCarro = dataCar.filter(
      car => car.id.toString() === id.toString(),
    );
    debugger;
    setTitulo(editarCarro[0].title);
    setModelo(editarCarro[0].model);
    setAno(editarCarro[0].year);
    setCor(editarCarro[0].color);
    setKm(editarCarro[0].km);
    setValor(editarCarro[0].price);
    setEditarDados(editarCarro);
  }, [dataCar, id]);

  const RetornaIndex = useCallback((): number => {
    const index = marcas.findIndex(
      (c, i) => c.value.toString() === id.toString() && i,
    );

    return index;
  }, []);

  useEffect(() => {
    if (id && marcas && dataCar) {
      varificaEdicao();
      RetornaIndex();
    } else {
      history.push('/Cadastro');
    }
  }, []);

  return (
    <Container>
      <ContainerCadastro>
        <ContainerTextError>
          <div>
            <p>Problemas ao salvar formulario</p>
          </div>
        </ContainerTextError>

        <ContainerInputs>
          <NomeVeiculo>
            <Input
              type="text"
              placeholder="Nome do veiculo"
              value={titulo}
              onChange={e => setTitulo(e.target.value)}
            />
          </NomeVeiculo>
          <ModeloAno>
            <Input
              type="text"
              placeholder="Modelo"
              value={modelo}
              onChange={e => setModelo(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Ano"
              value={ano}
              onChange={e => setAno(e.target.value)}
            />
          </ModeloAno>
          <Marca>
            <Select
              options={marcas}
              // value={id && marcas[RetornaIndex()]}
              onChange={e =>
                setMarcaSelecionada(
                  t =>
                    t || {
                      label: 'l',
                      value: 1,
                    },
                )
              }
              styles={{
                input: s => ({ ...s, color: 'white' }),
                control: s => ({
                  ...s,
                  backgroundColor: '#1f2d40',
                  border: 'none',
                  borderBottom: 'solid 1px white',
                  borderRadius: 'none',
                }),
                option: s => ({ ...s, color: '#1f2d40' }),
                singleValue: s => ({ ...s, color: 'white' }),
                placeholder: s => ({ ...s, color: 'white' }),
              }}
            />
          </Marca>
          <Caracteristicas>
            <Input
              type="text"
              placeholder="Cor"
              value={cor}
              onChange={e => setCor(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Quilometragem"
              value={km}
              onChange={e => setKm(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Valor"
              value={Valor}
              onChange={e => setValor(e.target.value)}
            />
          </Caracteristicas>
        </ContainerInputs>

        <ContainerButtons>
          <SavedButtons>
            <Button tipo="Salvar" onClick={() => history.push('/Listagem')}>
              Salvar
            </Button>
          </SavedButtons>
          <RemoveButtons>
            <Button
              onClick={() => {
                history.push('/');
              }}
              tipo="Excluir"
            >
              Remover
            </Button>
            <Button
              onClick={() => {
                history.push('/Listagem');
              }}
              tipo="Excluir"
            >
              Cancelar
            </Button>
          </RemoveButtons>
        </ContainerButtons>
      </ContainerCadastro>
    </Container>
  );
};

export default Cadastro;
