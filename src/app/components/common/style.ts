import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: 8,
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  header__wrapperText: {
    width: '70%',
    alignItems: 'center',
  },

  header__text: {
    fontFamily: 'Raleway-Bold',
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 18,
  },
});
