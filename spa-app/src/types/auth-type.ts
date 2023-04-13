

enum AuthActionTypes {
    LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST',
    LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',
    LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE',
    LOGOUT = 'AUTH_LOGOUT',
}

enum PermissionActionTypes {
    SET_PERMISSIONS = 'PERMISSIONS_SET_PERMISSIONS',
}


interface AuthState {
    token: string | null;
    error: string | null;
}

interface PermissionState {
    permissions: string[];
}

interface LoginRequestAction {
    type: AuthActionTypes.LOGIN_REQUEST;
}

interface LoginSuccessAction {
    type: AuthActionTypes.LOGIN_SUCCESS;
    payload: {
        token: string;
        permissions: string[];
    };
}

interface LoginFailureAction {
    type: AuthActionTypes.LOGIN_FAILURE;
    payload: {
        error: string;
    };
}

interface LogoutAction {
    type: AuthActionTypes.LOGOUT;
}

interface SetPermissionsAction {
    type: PermissionActionTypes.SET_PERMISSIONS;
    payload: {
        permissions: string[];
    };
}

type AuthAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction | LogoutAction;
type PermissionAction = SetPermissionsAction;

export {
    AuthActionTypes,
    PermissionActionTypes,
};

export type {
    AuthAction,
    PermissionAction,
    AuthState,
    PermissionState
};

