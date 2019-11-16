import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getValue } from '../../redux/value';

const ProductsInput = ({ value, onChange }) => (
    <input
        type="text"
        value={value}
        onChange={onChange}
        name="text"
        className="form-element"
        placeholder="Enter name of product to search..."
    />
);

ProductsInput.propTypes = {
    onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    value: getValue(state),
});

export default compose(connect(mapStateToProps), withRouter)(ProductsInput);
