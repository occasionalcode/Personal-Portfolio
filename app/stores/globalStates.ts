import { create } from "zustand";

type DarkMode = {
  darkMode: boolean;
  updateDarkMode: () => void;
  isFading: boolean;
  updateIsFading: () => void;
};

export const useDarkmode = create<DarkMode>((set) => ({
  darkMode: true,
  isFading: false,
  updateDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  updateIsFading: () => set((state) => ({ isFading: !state.isFading })),
}));
