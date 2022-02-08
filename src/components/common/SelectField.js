import React, { useState } from 'react';
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';
import styled from 'styled-components/native';
import { Colors, FontFamily } from '../../constants/Theme';

// Options data must contain 'item' & 'id' keys

const Container = styled.View`
  padding: 20px;
`;
const SelectBoxWrapper = styled.View`
  border-width: 1px;
  border-color: ${Colors.inputBorderColor};
  box-sizing: border-box;
  border-radius: 10px;
  padding-left: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 50px;
  background-color: ${Colors.white};
`;

const SelectField = ({ options, label, isMulti }) => {
  const [selectedTeam, setSelectedTeam] = useState({});
  const [selectedTeams, setSelectedTeams] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const onMultiChange = () => {
    return item => setSelectedTeams(xorBy(selectedTeams, [item], 'id'));
  };

  const onChange = () => {
    return val => setSelectedTeam(val);
  };

  return (
    <Container>
      <SelectBoxWrapper>
        <SelectBox
          label=""
          labelHeight={0}
          options={options}
          value={selectedTeam}
          onChange={onChange()}
          hideInputFilter={false}
          // inputPlaceholder={label}
          // onMultiSelect={isMulti ? onMultiChange() : {}}
          // onTapClose={isMulti ? onMultiChange() : {}}
          // isMulti={isMulti}
          // eslint-disable-next-line react-native/no-inline-styles
          labelStyle={{
            fontFamily: FontFamily.default,
            paddingBottom: 10,
            fontSize: 14,
            color: Colors.textDarkColor,
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyle={{
            marginBottom: 30,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            backgroundColor: Colors.white,
          }}
        />
      </SelectBoxWrapper>
    </Container>
  );
};

export default SelectField;
