import {
    Dispatch,
    Middleware,
    MiddlewareAPI,
    applyMiddleware,
    legacy_createStore as createStore
} from "redux";
import rootReducer from "./reducers/auth.reducer";

type RootState = ReturnType<typeof rootReducer>;

const functionMiddleware: Middleware<
    {}, // legacy types parameter, can be ignored
    RootState
> = ({ dispatch, getState }: MiddlewareAPI<Dispatch, RootState>) => (
    next: Dispatch
) => (action: any) => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }

    return next(action);
};

const store = createStore(rootReducer,
    applyMiddleware(functionMiddleware));

export { type RootState, store }
