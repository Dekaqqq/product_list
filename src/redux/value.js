// actionsTypes

export const ADD_VALUE = 'ADD_VALUE';

// actions

export const addValue = value => ({
    type: ADD_VALUE,
    payload: value,
});

// reducers

export const valueReducer = (state = '', { type, payload }) => {
    switch (type) {
        case ADD_VALUE:
            return payload;
        default:
            return state;
    }
};

// selectors

export const getValue = state => state.value;
