import React, { useState } from 'react';
import { View, ScrollView, Button } from 'react-native';
import styled from 'styled-components/native';
import { FontFamily, Colors } from '../../constants/Theme';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/actions/Auth';
import { Formik } from 'formik';
import InputText from '../../components/common/InputText';
import { POST } from '../../utils/axios';
import TwoFactorAuth from './TwoFactorAuth';
import { API_CONFIG } from '../../config';
import { S3_URL } from '@env';
import { SafeAreaView } from 'react-native';

const Login = ({ navigation }) => {
  const [enableVerifyCodeScreen, setEnableVerifyCodeScreen] = useState(false);
  const dispatch = useDispatch();
  const initialValues = { email: '', password: '' };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async values => {
        const data = { email: values.email, password: values.password };

        const checkTwoFaUrl = API_CONFIG.CHECKTWOFA;
        const checkTwoFA = await POST(checkTwoFaUrl, data);

        if (checkTwoFA?.data?.twoFA) {
          setEnableVerifyCodeScreen(checkTwoFA.data.twoFA);

          navigation.navigate('TwoFactorAuth', {
            email: values.email,
            password: values.password,
          });
        } else {
          dispatch(login(values.email, values.password, 0));
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <SafeAreaView>
          <ScrollView>
            <Container>
              {enableVerifyCodeScreen ? (
                <TwoFactorAuth
                  email={values.email}
                  password={values.password}
                />
              ) : (
                <View>
                  <LogoView>
                    <LogoImage
                      source={{
                        uri: `${S3_URL}/logo.png`,
                      }}
                    />
                    <LogoText>reminder</LogoText>
                  </LogoView>
                  <View>
                    <HelloText>Hello Again!</HelloText>
                    <SigninText>Sign In to Reminder</SigninText>
                    <DetailsText>Enter Your Details Below</DetailsText>
                  </View>
                  {/* <ButtonContainer>
                  <ButtonField
                    title="Sign In with Google"
                    background={Colors.white}
                    color={Colors.black}
                    borderColor={'#C4CDD5'}
                    fontWeight={600}
                    icon={'google'}
                  />
                  <ButtonField
                    title="Sign In with Facebook"
                    background={Colors.white}
                    color={Colors.black}
                    borderColor={'#C4CDD5'}
                    fontWeight={600}
                    icon={'facebook'}
                  />
                </ButtonContainer> */}
                  {/* <LineContainer>
                  <Line />
                  <LineText>OR</LineText>
                  <Line />
                </LineContainer> */}
                  <FormContainer>
                    <InputFieldContainer>
                      <InputText
                        label="Email Id*"
                        onChangeText={handleChange('email')}
                        value={values.email}
                        name="email"
                        keyboardType="email-address"
                        email
                        autoCapitalize="none"
                      />
                    </InputFieldContainer>
                    <InputFieldContainer>
                      <InputText
                        label="Password*"
                        onChangeText={handleChange('password')}
                        value={values.password}
                        name="password"
                        secureTextEntry
                        autoCapitalize="none"
                      />
                    </InputFieldContainer>
                    <ForgotPasswordContainer>
                      {/* <RememberText>Remember Me</RememberText> */}
                      <ForgetPasswordText
                        onPress={() => navigation.navigate('ForgetPassword')}
                      >
                        Forgot Password?
                      </ForgetPasswordText>
                    </ForgotPasswordContainer>
                    <LoginButton>
                      <Button
                        title="Login"
                        fontWeight={600}
                        onPress={handleSubmit}
                        color={Colors.primaryColor}
                      />
                    </LoginButton>
                    {/* <AccountText>
                      Don’t have an account?
                      <DetailsText> Get Started</DetailsText>
                    </AccountText> */}
                  </FormContainer>
                </View>
              )}
            </Container>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

const Container = styled.View`
  padding: 5%;
`;
const LogoView = styled.View`
  padding: 5px 0px 0px;
  flex-direction: row;
  align-items: center;
`;
const LogoText = styled.Text`
  font-family: ${FontFamily.default};
  font-weight: 600;
  font-size: 26px;
  color: ${Colors.black};
  padding-left: 2%;
`;
const HelloText = styled(LogoText)`
  font-size: 46px;
  padding: 2% 0% 10%;
`;
const SigninText = styled(LogoText)`
  font-size: 26px;
  padding-bottom: 1%;
`;
const DetailsText = styled(LogoText)`
  font-size: 14px;
  line-height: 24px;
  color: #01bea0;
`;
const FormContainer = styled.View`
  margin-top: 5%;
`;
const InputFieldContainer = styled.View`
  margin: 4% 0%;
`;
const LoginButton = styled.View`
  width: 100%;
`;
const ForgotPasswordContainer = styled.TouchableOpacity`
  padding: 0px 0px 30px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const RememberText = styled.Text`
  font-size: 12px;
  font-family: ${FontFamily.default};
  color: #212b36;
`;
const ForgetPasswordText = styled(RememberText)`
  color: #acafb4;
`;
const LogoImage = styled.Image`
  height: 45px;
  width: 45px;
`;

export default Login;
