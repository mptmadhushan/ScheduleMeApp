import { AuthActionType } from '../actions/AuthAction';

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    loggedUser: null
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionType.SET_IS_LOADING:
            return { ...state, isLoading: action?.payload };
        case AuthActionType.SET_IS_LOGGED_IN:
            return { ...state, isLoggedIn: action?.payload };
        case AuthActionType.SET_LOGGED_USER:
            return { ...state, loggedUser: action?.payload };
        case AuthActionType.SET_LOGGED_OUT:
            return { ...state, isLoggedIn: false, loggedUser: null };
        default:
            return state;
    }
};

export default AuthReducer;