import { useContext } from "react";
import { ThemeType } from "../../config/theme";
import { ThemeContext } from "../../config/theme/ThemeManager";

export const ThemePicker: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let themeToSelect =
      theme === ThemeType.dark ? ThemeType.light : ThemeType.dark;

    setTheme(themeToSelect);
  };

  return <button onClick={toggleTheme}>Theme Picker</button>;
};
