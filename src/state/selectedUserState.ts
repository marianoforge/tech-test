import { atom } from "recoil";
import { User } from "../types/UserTypes";

export const selectedUserState = atom<User | null>({
  key: "selectedUserState",
  default: null,
});
