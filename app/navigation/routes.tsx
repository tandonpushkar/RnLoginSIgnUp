import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {ScreenNames} from '@constants';
import {
  HomeScreen,
  LoginScreen,
  OnBoardingScreen,
  SignUpScreen,
} from '@screens';
import {screenOption} from '@constants';
import {store} from '../redux/store/index';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  const {login: {loginData = {}} = {}} = store?.getState();

  return (
    <Stack.Navigator
      initialRouteName={
        loginData?.email ? ScreenNames.HOME : ScreenNames.ONBOARDING
      }
      screenOptions={screenOption}>
      <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ScreenNames.SIGNUP} component={SignUpScreen} />
      <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
      <Stack.Screen
        name={ScreenNames.ONBOARDING}
        component={OnBoardingScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
