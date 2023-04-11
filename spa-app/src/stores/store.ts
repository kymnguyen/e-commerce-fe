import { legacy_createStore as createStore, combineReducers } from "redux";
import { authReducer, permissionReducer } from "./reducers/auth.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    permission: permissionReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);
