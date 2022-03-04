import type {
  NextPage,
  GetServerSidePropsContext,
  GetServerSideProps,
} from "next";
import { countryService } from "../../services";
import type { Country } from "../../services";
import { Content } from "../styles";

export const getServerSideProps: GetServerSideProps<
  CountryPageProps,
  { code: string }
> = async (context) => {
  const { code } = context.params as { code: string }; // quick hack to get TS off my back for now
  const country = await countryService.getOneByCode(code);

  return {
    props: {
      country,
    },
  };
};

interface CountryPageProps {
  country: Country;
}

const Country: NextPage<CountryPageProps> = ({ country }) => {
  console.log(country);
  return <Content>Country Page - Countries Details</Content>;
};

export default Country;
