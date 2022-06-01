import { atom } from "recoil";
import { Color } from "shared/types/color";

// state
export const themeState = atom<Theme>({
  key: "theme",
  default: {
    state: 'light',
    color: {
      base: '#FFFFFF',
      main: '#131315',
      gray01: '#B5B3BF',
      gray02: '#000000',
      gray03: '#000000',
      gray04: '#000000',
      gray05: '#000000',
      gray06: '#000000',
    }
  },
});

// type
export type ThemeState = "light" | "dark";

export type Theme = {
  state: ThemeState
  color: Color
}

