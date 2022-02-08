import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Theme/Colors';
// import { S3_URL } from '@env';
// import { SvgUri } from 'react-native-svg';
import {
  // widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Dashboard from '../screens/Dashboard';
import Reminder from '../screens/Reminder';
import Profile from '../screens/Profile';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const ReminderNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          height: Platform.OS === 'ios' ? hp('12%') : hp('8%'),
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Dashboard') {
            return (
              <View style={menuStyles.tabBarImageContainer}>
                <AntDesign
                  name="dashboard"
                  size={25}
                  color={Colors.primaryColor}
                />
              </View>
            );
          } else if (route.name === 'Reminder') {
            return (
              <View style={menuStyles.tabBarImageContainer}>
                <View style={menuStyles.tabBarImageContainer}>
                  <MaterialCommunityIcons
                    name="reminder"
                    size={25}
                    color={Colors.primaryColor}
                  />
                </View>
              </View>
            );
          } else if (route.name === 'Profile') {
            return (
              <View style={menuStyles.tabBarImageContainer}>
                <MaterialCommunityIcons
                  name="account"
                  size={25}
                  color={Colors.primaryColor}
                />
              </View>
            );
          }
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Reminder" component={Reminder} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const menuStyles = StyleSheet.create({
  menuContainer: {
    alignItems: 'flex-start',
    position: 'absolute',
    justifyContent: 'flex-start',
    marginTop: 40,
    padding: 5,
    backgroundColor: Colors.white,
  },
  menuItemStyle: {
    fontSize: 14,
    padding: 0,
    color: Colors.black,
  },
  emailStyle: {
    fontSize: 12,
    color: Colors.textLightColor,
  },
  buttonStyle: { paddingleft: 10, width: '100%' },
  imageContainer: { paddingRight: 10, paddingTop: 15 },
  tabBarImageContainer: { paddingRight: 10, paddingTop: 15, paddingBottom: 10 },
});

export default ReminderNavigation;
