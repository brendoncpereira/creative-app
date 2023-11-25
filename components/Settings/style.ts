import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'BaiJamjuree-Medium'
  }
})