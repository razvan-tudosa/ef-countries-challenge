import type { GetServerSideProps, NextPage } from "next";
import { countryService } from "../services";
import type { Country } from "../services";
import { Content } from "../styles/common";
import { Filters } from "../components/Filters";
import { CountryListing } from "../components/CountryListing";
import FiltersManager from "../components/Filters/FiltersManager";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // cache control mechanism offered by Next.js
  // more info can be found here: https://nextjs.org/docs/going-to-production#caching
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=120, stale-while-revalidate=240"
  );

  const countries = await countryService.getAll();

  return {
    props: {
      countries,
    },
  };
};

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
