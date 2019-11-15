// actionsTypes

export const ADD_CATEGORY = 'ADD_CATEGORY';

// actions

export const addCategory = category => ({
    type: ADD_CATEGORY,
    payload: category,
});

// reducers

export const categoryReducer = (state = '', { type, payload }) => {
    switch (type) {
        case ADD_CATEGORY:
            return payload;
        default:
            return state;
    }
};

// selectors

export const getCategory = state => state.category;
