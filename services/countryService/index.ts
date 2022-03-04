import axios, { AxiosInstance, AxiosStatic } from "axios";
import type { Country } from "./types";

interface CountryServiceI {
  getAll: () => Promise<Country[]>;
  getOneByCode: (code: string) => Promise<Country>;
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

  async getOneByCode(countryCode: string) {
    const response = await this.countryApi.get(`/alpha/${countryCode}`);

    return response.data[0];
  }
}

export default new CountryService(axios);
