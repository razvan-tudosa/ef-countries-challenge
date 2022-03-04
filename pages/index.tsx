import type { NextPage } from "next";
import { countryService } from "../services";
import type { Country } from "../services";
import { Content } from "./styles";
import { Filters } from "../components/Filters";
import { CountryListing } from "../components/CountryListing";

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
  console.log(countries);
  return (
    <Content>
      <Filters />
      <CountryListing countries={countries} />
    </Content>
  );
};

export default Home;
