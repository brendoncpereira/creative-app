import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const Menu = () => {

  const navigation = useNavigation();

  const handleNavigate = (route: string) => {
    navigation.navigate(route)
  }

  return (
    <View style={styles.menuContainer}>
      <View style={styles.menuWrapper}>

        <TouchableOpacity style={[styles.menuItem, styles.menuItem]} onPress={() => handleNavigate('Profile')}>
          <View style={styles.menuItemWrapper}>
            <FontAwesome name="user-o" size={24} color="black" />
            <Text style={styles.label}>Perfil</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, styles.menuItemHome]} onPress={() => handleNavigate('Home')}>
          <View style={styles.menuItemWrapper}>
            <AntDesign name="home" size={24} color="black" />
            <Text style={styles.label}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('Settings')}>
          <View style={[styles.menuItemWrapper, styles.menuItemWrapperHome]}>
            <AntDesign name="setting" size={24} color="black" />
            <Text style={styles.label}>Configurações</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View >
  )
}