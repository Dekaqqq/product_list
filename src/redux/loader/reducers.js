import { LOADER_OFF, LOADER_ON } from './types';

const loaderReducer = (state = false, { type }) => {
    switch (type) {
        case LOADER_ON:
            return true;
        case LOADER_OFF:
            return false;
        default:
            return state;
    }
};

export default loaderReducer;
