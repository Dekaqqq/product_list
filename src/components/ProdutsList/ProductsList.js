import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductsItem/ProductsItem';

const ProductsList = ({ products }) => (
    <ul className="list">
        {products.map(el => (
            <ProductItem {...el} key={el.asin} />
        ))}
    </ul>
);

ProductsList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            asin: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default ProductsList;
