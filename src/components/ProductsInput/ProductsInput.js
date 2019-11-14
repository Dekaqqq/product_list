import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getValue from '../../redux/value/selectors';

class ProductsInput extends Component {
    state = {};

    render() {
        const { value, onSearch } = this.props;
        return (
            <>
                <input
                    type="text"
                    value={value}
                    onChange={onSearch}
                    className="form-element  text-center col-md-12"
                    placeholder="Enter name of product to search..."
                />
            </>
        );
    }
}

ProductsInput.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    value: getValue(state),
});

export default connect(mapStateToProps)(ProductsInput);
