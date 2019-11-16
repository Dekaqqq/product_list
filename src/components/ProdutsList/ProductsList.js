import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductItem from './ProductsItem/ProductsItem';
import { List } from '../../styledComponents/styled';
import { getProducts } from '../../redux/products';
import { getValue } from '../../redux/value';
import { getCategory } from '../../redux/category';

const filterProductsByCategory = (products, category) =>
    products.filter(el =>
        el.bsr_category.toLowerCase().includes(category.toLowerCase()),
    );

const ProductsList = ({ products, value, category }) => {
    const filteredByCategory =
        category !== 'All Categories'
            ? filterProductsByCategory(products, category)
            : products;

    const filteredProducts = value
        ? filteredByCategory.filter(el =>
              el.name.toLowerCase().includes(value.toLowerCase()),
          )
        : filteredByCategory;

    return (
        <List>
            {filteredProducts.map(el => (
                <ProductItem {...el} key={el.asin} />
            ))}
        </List>
    );
};

ProductsList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            asin: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

const mapStateToProps = state => ({
    products: getProducts(state),
    value: getValue(state),
    category: getCategory(state),
});

export default connect(mapStateToProps)(ProductsList);
