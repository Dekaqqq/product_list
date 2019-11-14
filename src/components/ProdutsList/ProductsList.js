import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductItem from './ProductsItem/ProductsItem';
import { List } from '../../styledComponents/styled';
import getValue from '../../redux/value/selectors';
// import getCategory from '../../redux/category/selectors';

const ProductsList = ({ products, value }) => {
    const filteredProducts =
        value !== 'All Categories' && value
            ? products.filter(
                  el =>
                      el.name.toLowerCase().includes(value.toLowerCase()) ||
                      el.bsr_category
                          .toLowerCase()
                          .includes(value.toLowerCase()),
              )
            : products;

    return (
        <List className="col-sm-10 col-md-8">
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
    value: getValue(state),
    // category: getCategory(state),
});

export default connect(mapStateToProps)(ProductsList);
