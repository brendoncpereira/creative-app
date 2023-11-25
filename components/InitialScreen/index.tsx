import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { UndrawImage } from "./assets/UndrawImage";

export const InitialScreen = () => {

  const navigation = useNavigation();
;
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Lorem Ipsum</Text>
        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>
      <UndrawImage />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonLabel}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}