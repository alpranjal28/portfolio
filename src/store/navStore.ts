import { create } from "zustand";

type navState = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggle: () => void;
};

export const useNavStore = create<navState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
