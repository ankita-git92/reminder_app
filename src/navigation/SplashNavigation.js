import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const SplashNavigation = () => {
  const Stack = createNativeStackNavigator();
  function SplashScreen() {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default SplashNavigation;
