export const enum Screens {
  mobile = "375px",
  desktop = "1440px",
}

export const enum FontWeights {
  light = 300,
  semiBold = 600,
  extraBold = 800,
}

export const enum ThemeType {
  dark = "dark",
  light = "light",
}

export type Colors = {
  background: string;
  text: string;
  element: string;
  input: string;
};

export const enum Sizes {
  xs = "0.25rem",
  sm = "0.5rem",
  md = "1rem",
  lg = "1.5rem",
  xl = "3rem",
}

export type ColorsContainer = Record<keyof typeof ThemeType, Colors>;

export type Theme = {
  colors: Colors;
  font: {
    family: string;
    weights: Record<keyof typeof FontWeights, FontWeights>;
  };
  screens: Record<keyof typeof Screens, Screens>;
  sizes: Record<keyof typeof Sizes, Sizes>;
};
