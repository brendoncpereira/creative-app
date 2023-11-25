import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Routes } from './routes/Routes';

const App = () => {

  const [fontsLoaded] = useFonts({
    'BaiJamjuree-Regular': require('./assets/fonts/BaiJamjuree-Regular.ttf'),
    'BaiJamjuree-Medium': require('./assets/fonts/BaiJamjuree-Medium.ttf'),
    'BaiJamjuree-Bold': require('./assets/fonts/BaiJamjuree-SemiBold.ttf'),
    'BaiJamjuree-SemiBold': require('./assets/fonts/BaiJamjuree-Bold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;