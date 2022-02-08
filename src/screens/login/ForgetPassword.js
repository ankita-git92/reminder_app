import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, Button } from 'react-native';
import { FontFamily, Colors } from '../../constants/Theme';
import InputText from '../../components/common/InputText';
import { Formik } from 'formik';

const ForgetPassword = () => {
  return (
    <Formik onSubmit={async values => {}}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <ScrollView>
          <Container>
            <TextContainer>
              <MainText>Forgot Password</MainText>
              <SubText>
                Please enter the email address associated with your account and
                We will email you a link to reset your password.
              </SubText>
            </TextContainer>
            <InputFieldContainer>
              <InputText
                width="100%"
                label="Email Id*"
                name="email"
                secureTextEntry
                autoCapitalize="none"
              />
            </InputFieldContainer>

            <ButtonContainer>
              <Button
                title="Send"
                fontWeight={600}
                onPress={handleSubmit}
                color={Colors.primaryColor}
              />
            </ButtonContainer>
          </Container>
        </ScrollView>
      )}
    </Formik>
  );
};

const Container = styled.View`
  padding: 40% 5% 60%;
  background-color: ${Colors.appBackground};
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
  font-weight: 500;
  line-height: 20px;
  font-size: 14px;
  color: ${Colors.primaryColor};
  padding: 1% 0% 8%;
`;
const InputFieldContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15% 0%;
  width: 100%;
  align-items: center;
`;
const ButtonContainer = styled.View`
  width: 100%;
`;

export default ForgetPassword;
