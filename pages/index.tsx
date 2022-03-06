import { useState } from "react";
import type { NextPage } from "next";
import { countryService } from "../services";
import type { Country } from "../services";
import { Content } from "../styles/common";
import { Filters } from "../components/Filters";
import { CountryListing } from "../components/CountryListing";
import FiltersManager from "../components/Filters/FiltersManager";

export async function getServerSideProps() {
  const countries = await countryService.getAll();

  return {
    props: {
      countries,
    },
  };
}

interface CountryPageProps {
  countries: Country[];
}

const Home: NextPage<CountryPageProps> = ({ countries }) => {
  return (
    <Content>
      <FiltersManager>
        <Filters />
        <CountryListing countries={countries} />
      </FiltersManager>
    </Content>
  );
};

export default Home;
