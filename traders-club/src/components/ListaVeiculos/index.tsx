import React, { ButtonHTMLAttributes } from 'react';
import { Container, Veiculo, NomeValor, DescricaoANo } from './styles';
import { CarList } from '../../context/listaCarrosContext';

interface Parameters {
  data: CarList;
  funcao(): void;
}
const ListaVeiculos: React.FC<Parameters> = ({ data, funcao }) => {
  return (
    <Container onClick={() => funcao()}>
      <Veiculo>
        <NomeValor>
          <div>
            <h1> {data.title}</h1>
          </div>
          <div>
            <h1>{data.price}</h1>
          </div>
        </NomeValor>

        <DescricaoANo>
          <div>
            <h2>
              {' '}
              {data.model} {data.brand} {data.km}
            </h2>
          </div>
          <div>
            <h2>{data.year}</h2>
          </div>
        </DescricaoANo>
      </Veiculo>
    </Container>
  );
};
export default ListaVeiculos;
