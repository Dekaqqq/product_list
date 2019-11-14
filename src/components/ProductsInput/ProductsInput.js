import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getValue from '../../redux/value/selectors';

class ProductsInput extends Component {
    state = {
        text: '',
    };

    handleChange = ({ target }) => {
        const { name, value } = target;
        const { onSearch } = this.props;

        this.setState(
            {
                [name]: value,
            },
            () => onSearch(value),
        );
    };

    render() {
        const { text } = this.state;

        return (
            <>
                <input
                    type="text"
                    value={text}
                    onChange={this.handleChange}
                    name="text"
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
