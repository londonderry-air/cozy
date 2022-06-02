import { atom } from "recoil";
import { Color } from "shared/types/color";
import { pallets } from "shared/utils/color";

// state
export const themeState = atom<Theme>({
  key: "theme",
  default: {
    state: 'light',
    color: pallets.light
  },
});

// type
export type ThemeState = "light" | "dark";

export type Theme = {
  state: ThemeState
  color: Color
}

