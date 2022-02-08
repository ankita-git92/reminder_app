import React from 'react';
import styled from 'styled-components/native';
import { Alert, ScrollView } from 'react-native';
import { FontFamily, Colors } from '../../constants/Theme';
import InputText from '../../components/common/InputText';
import { Formik } from 'formik';
import ButtonField from '../../components/common/ButtonField';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { POST } from '../../utils/axios';
import { API } from '../../utils/api';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/actions/Auth';
import * as Yup from 'yup';

const ChangePassword = ({ navigation }) => {
  const initialValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };
  const ChangePassWordSchema = Yup.object().shape({
    currentPassword: Yup.string().required('Current Password is required'),
    newPassword: Yup.string()
      .min(5, 'Password must be at least 5 characters')
      .required('New Password is required'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('newPassword'), null],
      'Passwords must match'
    ),
  });
  const dispatch = useDispatch();

  const logoutConfirm = () => {
    return Alert.alert('Password Change Success!', 'Please Log In', [
      { text: 'OK', onPress: () => dispatch(logout()) },
    ]);
  };

  return (
    <Formik
      validationSchema={ChangePassWordSchema}
      initialValues={initialValues}
      onSubmit={async values => {
        const data = {
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        };

        const response = await POST(API('CHANGEPASSWORD'), data);

        if (response.success) {
          logoutConfirm();
        } else {
          return Alert.alert(`Oops`, `Error with old Password`, [
            { text: 'OK', onPress: () => console.log('On press') },
          ]);
        }
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <ScrollView>
          <Container>
            <TextContainer>
              <MainText>Change Password</MainText>
              <SubText>Change your current password or set a new one.</SubText>
            </TextContainer>
            <InputFieldContainer>
              <InputText
                width="100%"
                label="Old Password*"
                name="currentPassword"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={handleChange('currentPassword')}
                value={values.currentPassword}
                onBlur={handleBlur('currentPassword')}
              />
            </InputFieldContainer>
            {errors.currentPassword && (
              <ErrorStyle>{errors.currentPassword}</ErrorStyle>
            )}
            <InputFieldContainer>
              <InputText
                width="100%"
                label="New Password*"
                name="newPassword"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={handleChange('newPassword')}
                value={values.newPassword}
                onBlur={handleBlur('newPassword')}
              />
            </InputFieldContainer>
            {errors.newPassword && (
              <ErrorStyle>{errors.newPassword}</ErrorStyle>
            )}
            <InputFieldContainer>
              <InputText
                width="100%"
                label="Confirm Password"
                name="confirmPassword"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={handleChange('confirmPassword')}
                value={values.confirmPassword}
                onBlur={handleBlur('confirmPassword')}
              />
            </InputFieldContainer>
            {errors.confirmPassword && (
              <ErrorStyle>{errors.confirmPassword}</ErrorStyle>
            )}
            <BottomView>
              <ButtonContainer>
                <ButtonField
                  title="Cancel"
                  fontWeight={600}
                  color={Colors.black}
                  background={Colors.appBackground}
                  borderColor={Colors.inputBorderColor}
                  padding="10px 20px"
                  onPressEvent={() => navigation.pop()}
                />
                <ButtonField
                  title="Save Password"
                  fontWeight={600}
                  onPressEvent={handleSubmit}
                  background={Colors.primaryColor}
                  color={Colors.white}
                  padding="10px 70px"
                  disabled={!isValid}
                />
              </ButtonContainer>
            </BottomView>
          </Container>
        </ScrollView>
      )}
    </Formik>
  );
};

const Container = styled.View`
  padding: 25% 5% 75%;
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
  line-height: 24px;
  font-size: 14px;
  color: ${Colors.primaryColor};
  padding: 1% 0% 8%;
`;
const InputFieldContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3% 0%;
  width: 100%;
  align-items: center;
`;
const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const BottomView = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${hp('80%')}px;
  margin-left: 20px;
  border-radius: 10px;
`;
const ErrorStyle = styled.Text`
  font-size: 10px;
  color: ${Colors.redColor};
`;

export default ChangePassword;
