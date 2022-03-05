import axios, { AxiosInstance, AxiosStatic } from "axios";
import { convertObjToArray } from "../../utils";
import type { Country } from "./types";

interface CountryServiceI {
  getAll: () => Promise<Country[]>;
  getOneByName: (name: string) => Promise<Country>;
}

export class CountryService implements CountryServiceI {
  private countryApi: AxiosInstance;
  private timeout = 1000;
  private baseUrl = `https://restcountries.com/v3.1`;

  constructor(axios: AxiosStatic) {
    this.countryApi = axios.create({
      baseURL: this.baseUrl,
      timeout: this.timeout,
    });
  }

  async getAll() {
    const response = await this.countryApi.get("/all");

    return response.data;
  }

  async getOneByName(countryName: string) {
    const response = await this.countryApi.get(`/name/${countryName}`);

    const country = response.data[0];

    country.name.nativeName = convertObjToArray(country.name.nativeName);
    country.currencies = convertObjToArray(country.currencies);
    country.languages = convertObjToArray(country.languages);
    country.topLevelDomain = country.tld;

    delete country.tld;

    return country;
  }
}

export default new CountryService(axios);
