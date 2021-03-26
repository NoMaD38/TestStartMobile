import Api, { ICharacter } from './Api';
import { appSetCharacters } from '../store/app/app-actions';
import store from '../store/store';
import { IAppState } from '../store/app/app-reducer';

export const getCharacters = async (page?: number): Promise<void> => {
  try {
    const res = await Api.getCharacters(page);
    store.dispatch(appSetCharacters(res));
  } catch (error) {
    throw error;
  }
};

export const getCharacter = ({ characters, currentElement }: IAppState): ICharacter | undefined => {
  return characters.find((character) => character.id.toString() === currentElement);
};
