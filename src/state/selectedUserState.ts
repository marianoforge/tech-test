import { atom } from "recoil";
import { User } from "../types/UserTypes";

export const selectedUserState = atom<User | null>({
  key: "selectedUserState",
  default: null,
});

export const userDetailsVisibilityState = atom({
  key: "userDetailsVisibilityState",
  default: false,
});
