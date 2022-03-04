import type { NextPage } from "next";
import { countryService } from "../services";
import type { Country } from "../services";
import { Content } from "./styles";

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
  return <Content>Home Page - Countries Listing</Content>;
};

export default Home;
