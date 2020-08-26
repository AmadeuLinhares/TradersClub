import React from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerHome, Titulo, ContainerButton } from './styles';
import Container from '../../components/Container';
import Button from '../../components/Buttons';

const Home: React.FC = () => {
  const hisoty = useHistory();
  return (
    <Container>
      <ContainerHome>
        <Titulo>
          Pesquisa de veículas do <span>TradersClub</span>
        </Titulo>
      </ContainerHome>
      <ContainerButton>
        <Button
          style={{
            width: '150px',
            borderRadius: '5px',
          }}
          tipo="Salvar"
          onClick={() => hisoty.push('/Listagem')}
        >
          Listar Carros
        </Button>
      </ContainerButton>
    </Container>
  );
};

export default Home;
