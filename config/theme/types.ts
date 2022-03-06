export const enum Screens {
  mobile = "375px",
  tablet = "640px",
  laptop = "1024px",
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

export type Themes = keyof typeof ThemeType;

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

export const enum FontSizes {
  sm = "0.75rem",
  md = "1rem",
  lg = "1.25rem",
  xl = "1.5rem",
}

export const enum Radiuses {
  none = "0px",
  sm = "0.125rem" /* 2px */,
  normal = "0.25rem" /* 4px */,
  lg = "0.375rem" /* 6px */,
  xl = "0.5rem" /* 8px */,
  full = "9999px",
}

export type ColorsContainer = Record<Themes, Colors>;

export type Theme = {
  colors: Colors;
  font: {
    family: string;
    weights: Record<keyof typeof FontWeights, FontWeights>;
    sizes: Record<keyof typeof FontSizes, FontSizes>;
  };
  screens: Record<keyof typeof Screens, Screens>;
  sizes: Record<keyof typeof Sizes, Sizes>;
  borderRadius: Record<keyof typeof Radiuses, Radiuses>;
  shadows: {
    element: string;
    button: string;
  };
};
