import ADD_VALUE from './types';

const addValue = value => ({
    type: ADD_VALUE,
    payload: value,
});

export default addValue;
