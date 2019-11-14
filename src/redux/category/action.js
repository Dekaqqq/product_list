import ADD_CATEGORY from './types';

const addCategory = value => ({
    type: ADD_CATEGORY,
    payload: value,
});

export default addCategory;
