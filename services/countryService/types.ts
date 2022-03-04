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
  name: CountryName;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string; // Top Level Domain
  currencies: unknown;
  flags: {
    png: string;
    svg: string;
  };
};
