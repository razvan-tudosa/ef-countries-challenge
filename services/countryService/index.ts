import axios, { AxiosInstance, AxiosStatic } from "axios";
import { convertObjToArray } from "../../utils";
import type { Country } from "./types";

interface CountryServiceI {
  getAll: () => Promise<Country[]>;
  getOneByName: (name: string) => Promise<Country>;
  getAllByCodes: (codes: string[]) => Promise<Country[]>;
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

  async getAll(): Promise<Country[]> {
    const response = await this.countryApi.get("/all");

    return response.data;
  }

  async getOneByName(countryName: string): Promise<Country> {
    const response = await this.countryApi.get(`/name/${countryName}`);

    const country = response.data[0];

    country.name.nativeName = convertObjToArray(country.name.nativeName);
    country.currencies = convertObjToArray(country.currencies);
    country.languages = convertObjToArray(country.languages);
    country.topLevelDomain = country.tld;

    delete country.tld;

    if (country.borders) {
      country.borders = await this.getAllByCodes(country.borders);
    } else {
      country.borders = [];
    }

    return country;
  }

  async getAllByCodes(codes: string[]): Promise<Country[]> {
    const queryStringValue = codes.join(",");

    const response = await this.countryApi.get(
      `/alpha?codes=${queryStringValue}`
    );

    return response.data;
  }
}

export default new CountryService(axios);
