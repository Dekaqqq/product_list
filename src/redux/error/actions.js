import SHOW_ERROR from './types';

const showError = message => ({
    type: SHOW_ERROR,
    payload: message,
});

export default showError;
