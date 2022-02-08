import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginNavigation from './LoginNavigation';
import SplashNavigation from './SplashNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from '../constants/Theme';
import ReminderNavigation from './ReminderNavigation';

const Stack = createNativeStackNavigator();

const AppNavigator = props => {
  const isLoading = useSelector(state => state.auth.isLoading);
  const userToken = useSelector(state => state.auth.token);

  const dispatch = useDispatch();

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let token;

      try {
        token = await AsyncStorage.getItem('userData');
      } catch (e) {
        console.log(e);
      }
      dispatch({
        type: 'RESTORE_TOKEN',
        token: token ? token : null,
      });
    };

    bootstrapAsync();
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLoading ? (
          // We haven't finished checking for the token yet
          <SplashNavigation />
        ) : userToken !== null ? (
          // No token found, user isn't signed in
          <LoginNavigation />
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerTintColor: Colors.primaryColor,
            }}
          >
            <Stack.Group>
              <Stack.Screen
                name="ReminderDashboard"
                component={ReminderNavigation}
                options={{ headerShown: false }}
              />
            </Stack.Group>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
