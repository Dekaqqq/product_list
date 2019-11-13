import axios from 'axios';

export const URL = 'https://demo9165932.mockable.io/products';

export const fetchData = () => axios.get(URL).then(({ data }) => data.products);
