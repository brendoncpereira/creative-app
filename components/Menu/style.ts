import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F5E8C7',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  menuWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%'
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  menuItemHome: {
    backgroundColor: '#435585',
    borderRadius: 100,
    position: 'absolute',
    top: -32,
    width: 70,
    height: 70
  },
  menuItemWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItemWrapperHome: {
  },
  label: {
    fontFamily: 'BaiJamjuree-Bold',
    fontSize: 13,
  }
})