import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { getTheme } from ".";
import { Themes, ThemeType } from "./types";

type IThemeContext = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
};

export const ThemeContext = React.createContext<IThemeContext>({
  theme: ThemeType.dark,
  setTheme: () => {},
});

const ThemeManager: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(ThemeType.dark);

  const context = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={context}>
      <ThemeProvider theme={getTheme(theme)}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeManager;
