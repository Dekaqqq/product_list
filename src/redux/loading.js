// actionsTypes

export const LOADER_ON = 'productList/loader/LOADER_ON';
export const LOADER_OFF = 'productList/loader/LOADER_OFF';

// actions

export const loaderOn = () => ({
    type: LOADER_ON,
});

export const loaderOff = () => ({
    type: LOADER_OFF,
});

// reducers

export const loaderReducer = (state = false, { type }) => {
    switch (type) {
        case LOADER_ON:
            return true;
        case LOADER_OFF:
            return false;
        default:
            return state;
    }
};

// selectors

export const getLoader = state => state.loading;
