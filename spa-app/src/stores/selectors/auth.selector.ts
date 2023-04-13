import { AuthState } from "../../types";
import { RootState } from "../store";

const getAuthUser = (state: RootState): AuthState | null => state.auth;

export default getAuthUser;
