import axios from 'axios';

export const URL = 'https://demo9165932.mockable.io/products';

export const fetchData = url => axios.get(url).then(({ data }) => data);
