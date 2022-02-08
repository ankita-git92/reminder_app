import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../constants/Theme';

const InputTextWrapped = styled.TextInput`
  border: 1px solid ${Colors.inputBorderColor};
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  text-align: left;
`;

const InputText = props => {
  return (
    <InputTextWrapped
      placeholder={props.label}
      onPress={props.handleChange}
      onChangeText={props.onChangeText}
      {...props}
    />
  );
};

export default InputText;
