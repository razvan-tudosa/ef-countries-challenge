type CountryName = {
  common: string;
  official: string;
  nativeName: {
    cnr: {
      common: string;
      official: string;
    };
  };
};

export type Country = {
  capital: string[];
  cca2: string;
  currencies: unknown;
  flags: {
    png: string;
    svg: string;
  };
  name: CountryName;
  population: number;
  region: string;
  subregion: string;
  tld: string; // Top Level Domain
};
