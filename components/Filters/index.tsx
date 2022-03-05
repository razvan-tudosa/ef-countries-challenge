import React, { useContext } from "react";
import { Input, Dropdown, Menu, DropdownProps } from "semantic-ui-react";
import { Search as SearchIcon } from "@styled-icons/material/Search";
import { Wrapper } from "./styles";
import { FiltersContext } from "./FiltersManager";

const enum Regions {
  Africa = "Africa",
  Americas = "Americas",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

type Option = {
  key: number;
  text: keyof typeof Regions;
  value: keyof typeof Regions;
};

const options: Option[] = [
  { key: 1, text: Regions.Africa, value: Regions.Africa },
  { key: 2, text: Regions.Americas, value: Regions.Americas },
  { key: 3, text: Regions.Asia, value: Regions.Asia },
  { key: 4, text: Regions.Europe, value: Regions.Europe },
  { key: 5, text: Regions.Oceania, value: Regions.Oceania },
];

export const Filters: React.FC = () => {
  const { search, setSearch, setSelectedRegion } = useContext(FiltersContext);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleChangeRegion = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    data: any
  ) => {
    setSelectedRegion(data.value);
  };

  return (
    <Wrapper>
      <Input
        placeholder="Search for a country..."
        icon={<SearchIcon size={20} />}
        iconPosition="left"
        onChange={handleSearch}
      />

      <Menu compact>
        <Dropdown
          clearable
          text="Fiter by Region"
          options={options}
          onChange={handleChangeRegion}
          simple
          item
        />
      </Menu>
    </Wrapper>
  );
};
