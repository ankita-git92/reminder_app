import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/Login';
import TwoFactorAuth from '../screens/login/TwoFactorAuth';
import ForgetPassword from '../screens/login/ForgetPassword';

const LoginNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TwoFactorAuth"
        component={TwoFactorAuth}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ title: 'Forgot Password' }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default LoginNavigation;
