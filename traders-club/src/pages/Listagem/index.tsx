import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Veiculos from '../../components/ListaVeiculos';
import Container from '../../components/Container';
import { ListaVeiculosContainer } from './styles';
import { ListaCarosContext } from '../../context/listaCarrosContext';

const Listagem: React.FC = () => {
  const history = useHistory();

  const { dataCar, dataPesquisa, campoPesquisa } = useContext(
    ListaCarosContext,
  );
  return (
    <Container>
      <ListaVeiculosContainer>
        {campoPesquisa
          ? dataPesquisa.map(c => (
              <Veiculos
                data={c}
                key={c.id}
                funcao={() => history.push(`/Editar/${c.id}`)}
              />
            ))
          : dataCar.map(c => (
              <Veiculos
                data={c}
                key={c.id}
                funcao={() => history.push(`/Editar/${c.id}`)}
              />
            ))}
      </ListaVeiculosContainer>
    </Container>
  );
};

export default Listagem;
