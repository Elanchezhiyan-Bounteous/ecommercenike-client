import { atomWithStorage } from "jotai/utils";
import { userSessionProp } from "../types/IconTypes";


export const userAtom = atomWithStorage<userSessionProp>("user", {
  name: "",
  token: "",
  id: ""
});
