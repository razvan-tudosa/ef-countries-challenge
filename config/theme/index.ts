import {
  Theme,
  Screens,
  FontWeights,
  ThemeType,
  ColorsContainer,
  Sizes,
} from "./types";

const colors: ColorsContainer = {
  dark: {
    element: "hsl(209, 23%, 22%)",
    background: "hsl(207, 26%, 17%)",
    text: "hsl(0, 0%, 100%)",
    input: "hsl(0, 0%, 52%)",
  },
  light: {
    element: "hsl(0, 0%, 100%)",
    background: "hsl(0, 0%, 98%)",
    text: "hsl(200, 15%, 8%)",
    input: "hsl(0, 0%, 52%)",
  },
};

export const getTheme = (themeType: keyof typeof ThemeType): Theme => {
  const theme: Theme = {
    font: {
      family: "Nunito Sans",
      weights: {
        light: FontWeights.light,
        semiBold: FontWeights.semiBold,
        extraBold: FontWeights.extraBold,
      },
    },
    screens: {
      mobile: Screens.mobile,
      desktop: Screens.desktop,
    },
    colors: colors[themeType],
    sizes: {
      xs: Sizes.xs,
      sm: Sizes.sm,
      md: Sizes.md,
      lg: Sizes.lg,
      xl: Sizes.xl,
    },
  };

  return theme;
};

export { ThemeType };
