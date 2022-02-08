import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, Button } from 'react-native';
import { FontFamily, Colors } from '../../constants/Theme';
// import InputText from '../../components/common/InputText';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/actions/Auth';

const TwoFactorAuth = ({ route }) => {
  const dispatch = useDispatch();
  const initialValues = {
    code_1: '',
    code_2: '',
    code_3: '',
    code_4: '',
    code_5: '',
    code_6: '',
  };

  const [code1, setCode1] = React.useState('');
  const [code2, setCode2] = React.useState('');
  const [code3, setCode3] = React.useState('');
  const [code4, setCode4] = React.useState('');
  const [code5, setCode5] = React.useState('');
  const [code6, setCode6] = React.useState('');

  const code1ref = React.createRef('');
  const code2ref = React.createRef('');
  const code3ref = React.createRef('');
  const code4ref = React.createRef('');
  const code5ref = React.createRef('');
  const code6ref = React.createRef('');

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async values => {
        //TODO: @ankita - if user enter first values automatically skip to next, change the default color of button
        let pinVal = '' + code1 + code2 + code3 + code4 + code5 + code6;

        const { email, password } = route.params;

        if (pinVal !== '') {
          dispatch(login(email, password, pinVal));
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <ScrollView>
          <Container>
            <TextContainer>
              <MainText>2-Step Verification</MainText>
              <SubText>
                This extra step shows it's really you trying to sign in
              </SubText>
            </TextContainer>
            <InputContainer>
              <NumberInput
                placeholder="-"
                ref={code1ref}
                onChangeText={val => {
                  setCode1(val);
                  if (val) {
                    code2ref.current.focus();
                  }
                }}
                key={'code_1'}
                keyboardType="number-pad"
                maxLength={1}
                name={'code_1'}
              />
              <NumberInput
                placeholder="-"
                ref={code2ref}
                onChangeText={val => {
                  setCode2(val);
                  if (val) {
                    code3ref.current.focus();
                  }
                }}
                key={'code_2'}
                keyboardType="number-pad"
                maxLength={1}
                name={'code_2'}
              />
              <NumberInput
                placeholder="-"
                ref={code3ref}
                onChangeText={val => {
                  setCode3(val);
                  if (val) {
                    code4ref.current.focus();
                  }
                }}
                key={'code_3'}
                keyboardType="number-pad"
                maxLength={1}
                name={'code_3'}
              />
              <NumberInput
                placeholder="-"
                ref={code4ref}
                onChangeText={val => {
                  setCode4(val);
                  if (val) {
                    code5ref.current.focus();
                  }
                }}
                key={'code_4'}
                keyboardType="number-pad"
                maxLength={1}
                name={'code_4'}
              />
              <NumberInput
                placeholder="-"
                ref={code5ref}
                onChangeText={val => {
                  setCode5(val);
                  if (val) {
                    code6ref.current.focus();
                  }
                }}
                key={'code_5'}
                keyboardType="number-pad"
                maxLength={1}
                name={'code_5'}
              />
              <NumberInput
                placeholder="-"
                ref={code6ref}
                onChangeText={val => {
                  setCode6(val);
                }}
                key={'code_6'}
                keyboardType="number-pad"
                maxLength={1}
                name={'code_6'}
              />
            </InputContainer>
            <Button
              title="Verify"
              fontWeight={600}
              onPress={handleSubmit}
              color={Colors.primaryColor}
            />
          </Container>
        </ScrollView>
      )}
    </Formik>
  );
};

const Container = styled.View`
  padding: 40% 5%;
`;
const TextContainer = styled.View``;
const MainText = styled.Text`
  font-family: ${FontFamily.default};
  font-weight: 600;
  font-size: 30px;
  color: ${Colors.black};
`;
const SubText = styled.Text`
  font-family: ${FontFamily.default};
  font-weight: 600;
  font-size: 16px;
  color: ${Colors.black};
  padding: 10% 0% 5%;
`;

const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10% 0px;
  align-items: center;
`;
const NumberInput = styled.TextInput`
  border: 1px solid ${Colors.inputBorderColor};
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  align-self: center;
`;

export default TwoFactorAuth;
