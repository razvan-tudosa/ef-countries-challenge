import React from "react";
import { Input, Dropdown, Menu } from "semantic-ui-react";
import { Search as SearchIcon } from "@styled-icons/material/Search";
import { Wrapper } from "./styles";

const enum Regions {
  Africa = "Africa",
  America = "America",
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
  { key: 2, text: Regions.America, value: Regions.America },
  { key: 3, text: Regions.Asia, value: Regions.Asia },
  { key: 4, text: Regions.Europe, value: Regions.Europe },
  { key: 5, text: Regions.Oceania, value: Regions.Oceania },
];

export const Filters: React.FC = () => (
  <Wrapper>
    <Input
      placeholder="Search for a country..."
      icon={<SearchIcon size={20} />}
      iconPosition="left"
    />

    <Menu compact>
      <Dropdown text="Fiter by Region" options={options} simple item />
    </Menu>
  </Wrapper>
);
