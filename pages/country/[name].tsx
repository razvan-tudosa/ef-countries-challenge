import type { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { KeyboardBackspace as BackIcon } from "@styled-icons/material/KeyboardBackspace";

import { countryService } from "../../services";
import type { Country } from "../../services";
import { Content } from "../styles";
import {
  Col,
  Row,
  Details,
  Flag,
  Info,
  Item,
  Label,
  Navigation,
  Title,
  BorderCountries,
} from "./styles";
import { Button } from "../../components/common";

export const getServerSideProps: GetServerSideProps<
  CountryPageProps,
  { name: string }
> = async (context) => {
  const { name } = context.params as { name: string }; // quick hack to get TS off my back for now
  const country = await countryService.getOneByName(name);

  return {
    props: {
      country,
    },
  };
};

interface CountryPageProps {
  country: Country;
}

type InfoRow = {
  label: string;
  value: string | number;
};

type Info = {
  leftSide: InfoRow[];
  rightSide: InfoRow[];
};

const Country: NextPage<CountryPageProps> = ({ country }) => {
  console.log(country);
  const router = useRouter();

  const info: Info = {
    leftSide: [
      {
        label: "Native Name:",
        value: country.name.nativeName.map((item) => item.common).join(", "),
      },
      { label: "Population:", value: country.population },
      { label: "Region:", value: country.region },
      { label: "Sub Region:", value: country.subregion },
      { label: "Capital:", value: country.capital.join(", ") },
    ],
    rightSide: [
      { label: "Top Level Domain:", value: country.topLevelDomain },
      {
        label: "Currencies:",
        value: country.currencies.map((item) => item.name).join(", "),
      },
      {
        label: "Languages:",
        value: country.languages
          .map((item: any) => item?.[item.key])
          .join(", "),
      },
    ],
  };

  const handleGoBack = () => {
    router.push("/");
  };

  const handleGoToCountryDetails = (countryName: string) => () => {
    router.push(`/country/${countryName}`);
  };

  const renderColInfo = (info: InfoRow[]) =>
    info.map(({ label, value }: InfoRow) => (
      <Item key={value}>
        <Label>{label}</Label>
        <span>{value}</span>
      </Item>
    ));

  return (
    <Content>
      <Navigation>
        <Button onClick={handleGoBack} large>
          <BackIcon size={20} /> Back
        </Button>
      </Navigation>
      <Info>
        <Flag src={country.flags.png} />
        <Details>
          <Title>{country.name.common}</Title>
          <Row>
            <Col>{renderColInfo(info.leftSide)}</Col>
            <Col>{renderColInfo(info.rightSide)}</Col>
          </Row>
          <BorderCountries>
            <Label>Border Countries:</Label>
            {country.borders.length === 0 && "N/A"}
            {country.borders.map((item) => (
              <Button
                onClick={handleGoToCountryDetails(item.name.common)}
                key={item.cca2}
              >
                {item.name.common}
              </Button>
            ))}
          </BorderCountries>
        </Details>
      </Info>
    </Content>
  );
};

export default Country;
