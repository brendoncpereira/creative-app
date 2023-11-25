import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'
import LoadingImage from '../../assets/images/loading-image.gif'

export const SplashScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('InitialScreen')
    }, 3000)
  }, [])

  return (
    <View style={styles.container}>
      <Image style={styles.loadingImage} source={LoadingImage} />
    </View>
  )
}