import React from 'react';
import Select, { Styles } from 'react-select';
import { Container, Input } from './styles';

interface Parameters {
  value: string | number;
  label: string | number;
}

interface ValuesSelect extends Select<Select> {
  options: Parameters[];
}

const InputSelect: React.FC<ValuesSelect> = ({ ...rest }) => {
  const colourStyles = {
    control: (styles: Styles) => ({
      ...styles,
      backgroundColor: '#1f2d40',
      borderColor: '#1f2d40',
      borderRadius: 0,
      borderBottom: 'solid 1px white',
    }),
    option: (styles: Styles) => ({
      ...styles,
      backgroundColor: '#fff',
      color: '#1f2d40',
    }),
    input: (styles: Styles) => ({ ...styles, color: 'white' }),
    placeholder: (styles: Styles) => ({ ...styles }),
    singleValue: (styles: Styles) => ({
      ...styles,
      color: '#fff',
    }),
  };

  return (
    <Container>
      <Input {...rest} styles={colourStyles} />
    </Container>
  );
};

export default InputSelect;
