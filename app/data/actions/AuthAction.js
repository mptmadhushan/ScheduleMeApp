export const AuthActionType = {
    SET_IS_LOADING: 'auth/SET_IS_LOADING',
    SET_IS_LOGGED_IN: 'auth/SET_IS_LOGGED_IN',
    SET_LOGGED_USER: 'auth/SET_LOGGED_USER',
    SET_LOGGED_OUT: 'auth/SET_LOGGED_OUT'
}

export const setIsLoading = (value) => {
    return (dispatch) => {
        dispatch({
            type: AuthActionType.SET_IS_LOADING,
            payload: value
        });
    };
};

export const setIsLoggedIn = (value) => {
    return (dispatch) => {
        dispatch({
            type: AuthActionType.SET_IS_LOGGED_IN,
            payload: value
        });
    };
};

export const setLoggedUser = (value) => {
    return (dispatch) => {
        dispatch({
            type: AuthActionType.SET_LOGGED_USER,
            payload: value
        });
    };
};

export const login = (value) => {
    return async (dispatch) => {
    };
};

export const logout = () => {
    return async (dispatch) => {
        dispatch({
            type: AuthActionType.SET_LOGGED_OUT,
            payload: null
        });
    };
};