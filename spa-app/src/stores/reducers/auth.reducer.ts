import { combineReducers } from 'redux';
import {
  AuthActionTypes,
  PermissionActionTypes,
  AuthAction,
  PermissionAction,
} from '../../types';

interface AuthState {
  token: string | null;
  error: string | null;
}

interface PermissionState {
  permissions: string[];
}

const initialAuthState: AuthState = {
  token: null,
  error: null,
};

const initialPermissionState: PermissionState = {
  permissions: [],
};

const authReducer = (state = initialAuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        error: null,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      };
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case AuthActionTypes.LOGOUT:
      return initialAuthState;
    default:
      return state;
  }
};

const permissionReducer = (
  state = initialPermissionState,
  action: PermissionAction
): PermissionState => {
  switch (action.type) {
    case PermissionActionTypes.SET_PERMISSIONS:
      return {
        ...state,
        permissions: action.payload.permissions,
      };
    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer,
  permissionReducer,
});
