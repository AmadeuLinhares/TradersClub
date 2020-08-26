import React, { useState, useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ListaCarosContext } from '../../context/listaCarrosContext';
import {
  ContainerPesquisa,
  Pesquisa,
  Cadastrar,
  Container,
  SubContainer,
  Principal,
  ContainerSerachBar,
} from './styles';

const SerachBar: React.FC = () => {
  const [peqeuisa, setPesquisa] = useState([]);
  const {
    dataCar,
    dataPesquisa,
    listaPequisaCarrinho,
    observadorCampo,
  } = useContext(ListaCarosContext);

  const pesquisarCarrinho = useCallback(
    e => {
      observadorCampo(!!e);
      const array = dataCar.filter(
        c =>
          c.title
            .toLocaleLowerCase()
            .indexOf(e.target.value.toLocaleLowerCase()) > -1,
      );
      listaPequisaCarrinho(array);
    },
    [dataCar],
  );
  const history = useHistory();
  return (
    <Container>
      <SubContainer>
        <Principal>
          <ContainerPesquisa>
            <Pesquisa>
              <input type="text" onChange={e => pesquisarCarrinho(e)} />
            </Pesquisa>
            <Cadastrar onClick={() => history.push('/Cadastro')}>
              Cadastrar
            </Cadastrar>
          </ContainerPesquisa>
        </Principal>
      </SubContainer>
    </Container>
  );
};

export default SerachBar;
