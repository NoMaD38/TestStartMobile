import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper__card__character: {
    marginHorizontal: 30,
    marginBottom: 13,
    paddingVertical: 10,
    paddingHorizontal: 7,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },

  wrapper__image__avatar: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image__avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },

  wrapper__text: {
    marginLeft: 7,
    maxWidth: '60%',
  },

  activityindicator__style: {
    flex: 1,
    justifyContent: 'center',
  },
});
