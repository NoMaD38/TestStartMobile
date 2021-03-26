import { IGetCharactersResponse } from '../../utils/Api';
import { APP_SET_CURRENT_ELEMENT, APP_SET_DATA_CHARACTERS } from './app-types';

export const appSetCurrentElement = (id: string) =>
  ({ type: APP_SET_CURRENT_ELEMENT, payload: id } as const);

export const appSetCharacters = (data: IGetCharactersResponse) =>
  ({ type: APP_SET_DATA_CHARACTERS, payload: data } as const);

export type AppActionTypes =
  | ReturnType<typeof appSetCurrentElement>
  | ReturnType<typeof appSetCharacters>;
