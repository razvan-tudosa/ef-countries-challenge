import { useRouter } from "next/router";
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
  const router = useRouter();

  const handleClickCard = (cca2: string) => () => {
    router.push(`/country/${cca2}`);
  };

  const mappedCountries = countries.map((country) => (
    <CountryCard
      key={country.cca2}
      country={country}
      onClickCard={handleClickCard(country.cca2)}
    />
  ));

  return <ListingWrapper>{mappedCountries}</ListingWrapper>;
};
