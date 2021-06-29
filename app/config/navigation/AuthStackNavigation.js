import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';

const AuthStackNavigator = createStackNavigator();

const AuthStackNavigation = () => {
  return (
    <AuthStackNavigator.Navigator headerMode="none" initialRouteName="Login">
      <AuthStackNavigator.Screen name="Login" component={LoginScreen} />
      <AuthStackNavigator.Screen name="Register" component={RegisterScreen} />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthStackNavigation;
