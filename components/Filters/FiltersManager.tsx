import React, { useState } from "react";

type IFiltersContext = {
  search: string;
  setSearch: (search: string) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
};

export const FiltersContext = React.createContext<IFiltersContext>({
  search: "",
  setSearch: () => {},
  selectedRegion: "",
  setSelectedRegion: () => {},
});

const FiltersManager: React.FC = ({ children }) => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const context = {
    search,
    setSearch,
    selectedRegion,
    setSelectedRegion,
  };

  return (
    <FiltersContext.Provider value={context}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersManager;
