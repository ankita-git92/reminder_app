import AsyncStorage from '@react-native-async-storage/async-storage';
import { POST, GET } from '../../src/utils/axios';
import jwt_decode from 'jwt-decode';
import { API_CONFIG } from '../../src/config';
import { Alert } from 'react-native';
import { API } from '../../src/utils/api';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const authenticate = userData => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, token: userData.token });
  };
};

export const login = (email, password, pin) => {
  const body = { email, password, pin };
  const FailedLoginAlert = () =>
    Alert.alert('Login Error', 'The Email or Password is incorrect', [
      { text: 'OK' },
    ]);

  return async dispatch => {
    const url = API_CONFIG.LOGIN;

    const response = await POST(url, body);

    if (!response.success) {
      FailedLoginAlert();
      return;
    }

    // // decode jwt token
    const decodeToken = jwt_decode(response.data.token);
    const userData = {
      token: response.data.token,
      permissions: '',
      ...decodeToken,
    };

    await saveDataToStorage(JSON.stringify(userData));

    const res = await GET(API('PERMISSIONS'));
    await AsyncStorage.setItem(
      'permissions',
      res?.role?.permissions.toString()
    );

    dispatch(authenticate(userData));
  };
};

export const logout = () => {
  return async dispatch => {
    await AsyncStorage.removeItem('userData');
    await AsyncStorage.removeItem('token');
    dispatch({ type: LOGOUT });
  };
};

const saveDataToStorage = async userData => {
  await AsyncStorage.setItem('userData', userData);
  await AsyncStorage.setItem('token', JSON.parse(userData).token);
  await AsyncStorage.setItem('role', JSON.parse(userData).role);
};
