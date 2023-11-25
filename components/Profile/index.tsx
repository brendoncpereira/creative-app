import React, { Fragment } from 'react';
import { View, Text } from 'react-native'
import { styles } from './style'
import { Menu } from '../Menu';

export const Profile = () => {
  return (
    <Fragment>
      <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
      <Menu/>
    </Fragment>
  )
}