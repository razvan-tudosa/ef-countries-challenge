import type {
  NextPage,
  GetServerSidePropsContext,
  GetServerSideProps,
} from "next";
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
} from "./styles";

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

  const info: Info = {
    leftSide: [
      { label: "Native Name:", value: "country.name.nativeName.cnr.common" },
      { label: "Population:", value: country.population },
      { label: "Region:", value: country.region },
      { label: "Sub Region:", value: country.subregion },
      { label: "Capital:", value: 'country.capital.join(", ")' },
    ],
    rightSide: [
      { label: "Top Level Domain:", value: country.tld },
      { label: "Currencies", value: "TBD" },
      { label: "Languages", value: "TBD" },
    ],
  };

  const renderColInfo = (info: InfoRow[]) =>
    info.map(({ label, value }: InfoRow) => (
      <Col key={value}>
        <Item>
          <Label>{label}</Label>
          <span>{value}</span>
        </Item>
      </Col>
    ));

  return (
    <Content>
      Country Page - Countries Details - Country Name: {country.name.common}
      <Navigation>
        <button>Back</button>
      </Navigation>
      <Info>
        <Flag src={country.flags.png} />
        <Details>
          <Title>{country.name.common}</Title>
          <Row>
            {renderColInfo(info.leftSide)}
            {renderColInfo(info.rightSide)}
            <Col></Col>
          </Row>
        </Details>
      </Info>
    </Content>
  );
};

export default Country;
