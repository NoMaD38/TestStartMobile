import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper__content: {
    marginHorizontal: 30,
    paddingVertical: 10,
    paddingHorizontal: 7,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  wrapper__image: {
    alignItems: 'center',
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  wrapper__info__text: {
    marginTop: 10,
  },

  font__first: {
    fontFamily: 'Raleway-Light',
    fontSize: 13,
    lineHeight: 17,
  },

  font__last: {
    fontFamily: 'Raleway-Bold',
    fontSize: 13,
    lineHeight: 17,
  },
});
