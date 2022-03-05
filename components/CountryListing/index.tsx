import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Searchengin } from "styled-icons/fa-brands";
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
  const { search } = useContext(FiltersContext);

  const handleClickCard = (name: string) => () => {
    router.push(`/country/${name}`);
  };

  const mappedCountries = countries
    .filter((item) => {
      if (search.length > 0) {
        return item.name.common.toLowerCase().includes(search.toLowerCase());
      } else {
        return true;
      }
    })
    .map((country) => (
      <CountryCard
        key={country.cca2}
        country={country}
        onClickCard={handleClickCard(country.name.common)}
      />
    ));

  return <ListingWrapper>{mappedCountries}</ListingWrapper>;
};
