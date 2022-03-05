import { useContext } from "react";
import { ThemeType, Themes } from "../../config/theme";
import { ThemeContext } from "../../config/theme/ThemeManager";
import { DarkMode as DarkModeIcon } from "@styled-icons/material/DarkMode";
import { DarkMode as DarkModeOutlineIcon } from "@styled-icons/material-outlined/DarkMode";
import { ToggleThemeButton } from "./styles";

export const ThemePicker: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const isDark = (theme: Themes) => theme === ThemeType.dark;

  const toggleTheme = () => {
    let themeToSelect = isDark(theme) ? ThemeType.light : ThemeType.dark;

    setTheme(themeToSelect);
  };

  const Icon = isDark(theme) ? DarkModeIcon : DarkModeOutlineIcon;
  const label = isDark(theme) ? "Dark Mode" : "Light Mode";

  return (
    <ToggleThemeButton onClick={toggleTheme}>
      <Icon size={16} />
      <span>{label}</span>
    </ToggleThemeButton>
  );
};
