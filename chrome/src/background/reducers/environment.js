const initialState = {
    showOverlay: false
};

export default (state = initialState, action) => {
    switch (action.type) {
    case 'CHANGE_SHOW_OVERLAY':
        return {
            ...state,
            showOverlay: action.show
        };
    default:
        return state
    }
}