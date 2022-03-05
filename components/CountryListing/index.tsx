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

  const handleClickCard = (name: string) => () => {
    router.push(`/country/${name}`);
  };

  const mappedCountries = countries.map((country) => (
    <CountryCard
      key={country.cca2}
      country={country}
      onClickCard={handleClickCard(country.name.common)}
    />
  ));

  return <ListingWrapper>{mappedCountries}</ListingWrapper>;
};
