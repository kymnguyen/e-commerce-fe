import { AuthAction, AuthActionTypes } from '../../types/auth-type';
// import authService from '../../services/authService';
import { RootState } from '../store';
import { Dispatch  } from 'redux';

export const login = (email: string, password: string) => {
    return (dispatch: Dispatch<AuthAction>) => {
        try {
            //   const user = await authService.login(email, password);
            const fakeLogin=(email: string, password: string) =>{
                const user = {
                    email, 
                    name: "hello world",
                    token: "abc",
                    permissions: ['ALL','C','R']
                };
                return user;
            }
            const user = fakeLogin(email, password);
            console.log(user)
            dispatch<AuthAction>({ type: AuthActionTypes.LOGIN_SUCCESS, payload: user });
        } catch (err: any) {
            const error: any = err.response.data;
            dispatch({ type: AuthActionTypes.LOGIN_FAILURE, payload: error });
        }
    };
};

export const logout = (): AuthAction => {
    return { type: AuthActionTypes.LOGOUT };
};
