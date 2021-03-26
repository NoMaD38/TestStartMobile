import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export interface ICharacter {
  id: number;
  name: string;
  gender: string;
  image: string;
  status: string;
  location: {
    name: string;
  };
}

export interface IInfo {
  count: number;
  pages: 34;
}

export interface IGetCharactersResponse {
  info: IInfo;
  results: ICharacter[];
}

class Api {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        common: {
          Accept: 'application/json',
        },
      },
    });
  }

  public async getCharacters(page = 1): Promise<IGetCharactersResponse> {
    try {
      const res = await this.instance.get<IGetCharactersResponse>(`?page=${page}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new Api();
