import { ICharacter } from '../../utils/Api';
import { AppActionTypes } from './app-actions';
import { APP_SET_CURRENT_ELEMENT, APP_SET_DATA_CHARACTERS } from './app-types';

export interface IAppState {
  currentElement: string | null;
  characters: ICharacter[];
  countPages: number;
}

const INITIAL_STATE: IAppState = {
  currentElement: null,
  characters: [],
  countPages: 1,
};

export default (state = INITIAL_STATE, action: AppActionTypes): IAppState => {
  switch (action.type) {
    case APP_SET_CURRENT_ELEMENT:
      if (action.payload === state.currentElement) {
        return {
          ...state,
          currentElement: null,
        };
      } else {
        return {
          ...state,
          currentElement: action.payload,
        };
      }

    case APP_SET_DATA_CHARACTERS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload.results],
        countPages: action.payload.info.pages,
      };

    default:
      return state;
  }
};
