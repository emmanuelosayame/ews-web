import create from "zustand";
import { devtools, persist, StateStorage } from "zustand/middleware";

export const useStore = create<any>()(
  devtools(
    persist((...args) => ({})),
    { name: "ews" }
  )
);
