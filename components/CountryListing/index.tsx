import React from "react";
import { Country } from "../../services";
import { CountryCard } from "./CountryCard";
import { ListingWrapper } from "./styles";

interface CountryListingProps {
  countries: Country[];
}

export const CountryListing: React.FC<CountryListingProps> = ({
  countries,
}) => {
  const mappedCountries = countries.map((country) => (
    <CountryCard key={country.cca2} country={country} />
  ));

  return <ListingWrapper>{mappedCountries}</ListingWrapper>;
};
