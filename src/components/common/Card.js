import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../constants/Theme';

const Card = props => {
  const Paper = styled.View`
    background: ${Colors.white};
    box-shadow: 0px 4px 70px rgba(0, 0, 0, 0.03);
    border-radius: ${props.borderRadius ? props.borderRadius : '5px'};
    padding: 15px;
    flex: 1;
    margin: ${props.margin ? props.margin : '0px 8px'};
  `;
  return <Paper>{props.children}</Paper>;
};

export default Card;
