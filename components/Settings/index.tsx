import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style'
import { Menu } from '../Menu';

export const Settings = () => {
  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.text}>Settings Screen</Text>
      </View>
      <Menu />
    </Fragment>
  )
}