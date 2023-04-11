import { RootState } from "../store";

const getAuthUser = (state: RootState): any | null => state.auth;

export default getAuthUser;
