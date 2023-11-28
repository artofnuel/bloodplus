import { create } from "zustand";

const useStore = create((set) => ({
  showMenu: false,
  handleShowMenu: () => set((state) => ({ showMenu: !state.showMenu })),
  falseShowMenu: () => set((state) => ({ showMenu: (state.showMenu = false) })),
}));

export default useStore;
