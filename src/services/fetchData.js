import axios from 'axios';
import queryString from 'query-string';

export const URL = 'https://demo9165932.mockable.io/products';

export const fetchData = () => axios.get(URL).then(({ data }) => data.products);

export const getSearchValue = props => queryString.parse(props).item;
