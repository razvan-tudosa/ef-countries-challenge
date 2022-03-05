import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Country } from "../../services";
import { FiltersContext } from "../Filters/FiltersManager";
import { CountryCard } from "./CountryCard";
import { ListingWrapper } from "./styles";

interface CountryListingProps {
  countries: Country[];
}

export const CountryListing: React.FC<CountryListingProps> = ({
  countries,
}) => {
  const router = useRouter();
  const { search, selectedRegion } = useContext(FiltersContext);

  const handleClickCard = (name: string) => () => {
    router.push(`/country/${name}`);
  };

  const mappedCountries = countries
    .filter((item) =>
      item.name.common.toLowerCase().includes(search.trim().toLowerCase())
    )
    .filter((item) =>
      !!selectedRegion ? item.region === selectedRegion : true
    )
    .map((country) => (
      <CountryCard
        key={country.cca2}
        country={country}
        onClickCard={handleClickCard(country.name.common)}
      />
    ));

  return <ListingWrapper>{mappedCountries}</ListingWrapper>;
};
