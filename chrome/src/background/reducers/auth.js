const initialState = {
    loggedInUser: {
        id: null
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
    case 'RECEIVE_USER':
        return {
            ...state,
            loggedInUser: action.user
        };
    case 'RESET_AUTH_STATE':
        return {
            ...state,
            loggedInUser: {
                id: null,
            }
        };
    default:
        return state
    }
}