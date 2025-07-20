import { create } from "zustand";

type CursorState = {
  position: { x: number; y: number };
  cursorOver: string;
  showCursor: boolean;
  setPosition: (position: { x: number; y: number }) => void;
  setCursorOver: (over: string) => void;
  setShowCursor: (show: boolean) => void;
};

export const useCursorStore = create<CursorState>((set) => ({
  position: { x: 0, y: 0 },
  cursorOver: "",
  showCursor: false,
  setPosition: (position) => set({ position }),
  setCursorOver: (cursorOver) => set({ cursorOver }),
  setShowCursor: (showCursor) => set({ showCursor }),
}));
