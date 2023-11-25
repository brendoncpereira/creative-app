import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#435585',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16
  },
  titleWrapper: {
    width: "80%"
  },
  title: {
    fontFamily: 'BaiJamjuree-Bold',
    fontSize: 24,
    color: '#FFF',
    lineHeight: 24,
    textAlign: 'center'
  },
  subtitle: {
    fontFamily: 'BaiJamjuree-Regular',
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',

  },
  button: {
    backgroundColor: '#F5E8C7',
    borderRadius: 15,
    width: '100%',
    paddingVertical: 10
  },
  buttonLabel: {
    fontFamily: 'BaiJamjuree-Bold',
    fontSize: 16,
    textAlign: 'center'
  }
})