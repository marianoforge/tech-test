import { atom } from "recoil";

export const nameFilterState = atom<string>({
  key: "nameFilterState",
  default: "",
});

export const nationalityFilterState = atom<string[]>({
  key: "nationalityFilterState",
  default: [],
});
