import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles'
import { Menu } from '../Menu';

export const Home = () => {

  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
      <Menu />
    </Fragment>
  )
}