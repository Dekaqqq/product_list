import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductsItem/ProductsItem';
import { List } from '../../styledComponents/styled';

const ProductsList = ({ products }) => (
    <List className="col-sm-10 col-md-8">
        {products.map(el => (
            <ProductItem {...el} key={el.asin} />
        ))}
    </List>
);

ProductsList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            asin: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default ProductsList;
