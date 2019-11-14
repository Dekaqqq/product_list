// actionsTypes

export const SHOW_ERROR = 'productList/error/SHOW_ERROR';

// actions

export const showError = () => ({
    type: SHOW_ERROR,
});
// reducers

export const errorReducer = (state = false, { type }) => {
    switch (type) {
        case SHOW_ERROR:
            return true;
        default:
            return state;
    }
};

// selectors

export const getErrorMessage = state => state.error;
