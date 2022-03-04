import { Country } from "../../services";
import { Card, DataRow, DataValue, Flag, Info, Label, Name } from "./styles";

type CountryCardProps = {
  country: Country;
};

export const CountryCard: React.FC<CountryCardProps> = ({ country }) => (
  <Card>
    <Flag src={country.flags.png} />
    <Info>
      <Name>{country.name.common}</Name>
      <DataRow>
        <Label>Population:</Label>
        <DataValue>{country.population}</DataValue>
      </DataRow>
      <DataRow>
        <Label>Region:</Label>
        <DataValue>{country.region}</DataValue>
      </DataRow>
      <DataRow>
        <Label>Capital:</Label>
        <DataValue>{country.capital}</DataValue>
      </DataRow>
    </Info>
  </Card>
);
