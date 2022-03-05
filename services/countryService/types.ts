import { LanguageDimensions } from "@styled-icons/entypo/Language";

type CountryName = {
  common: string;
  official: string;
  nativeName: {
    key: string;
    common: string;
    official: string;
  }[];
};

export type Country = {
  capital: string[];
  cca2: string;
  currencies: {
    key: string;
    name: string;
    symbol: string;
  }[];
  flags: {
    png: string;
    svg: string;
  };
  name: CountryName;
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: string;
  languages: {
    key: string;
  }[];
};
