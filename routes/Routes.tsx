import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../components/Home';
import { Profile } from '../components/Profile';
import { Settings } from '../components/Settings';
import { SplashScreen } from '../components/SplashScreen';
import { InitialScreen } from '../components/InitialScreen';

export const Routes = () => {

  const Stack = createStackNavigator();


  return (
    <Fragment>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen
          name='SplashScreen'
          options={{ headerShown: false }}
          component={SplashScreen}
        />

        <Stack.Screen
          name='InitialScreen'
          options={{ headerShown: false }}
          component={InitialScreen}
        />

        <Stack.Screen
          name='Home'
          options={{ headerShown: false }}
          component={Home}
        />

        <Stack.Screen
          name='Profile'
          options={{ headerShown: false }}
          component={Profile}
        />

        <Stack.Screen
          name='Settings'
          options={{ headerShown: false }}
          component={Settings}
        />
      </Stack.Navigator>
    </Fragment>
  )
}