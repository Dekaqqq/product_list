import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductsInput extends Component {
    state = {
        text: '',
    };

    handleChange = ({ target }) => {
        const { name, value } = target;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = e => {
        const { text } = this.state;
        const { onSearch } = this.props;

        e.preventDefault();

        onSearch(text);

        this.setState({
            text: '',
        });
    };

    render() {
        const { text } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className="search-form row">
                <input
                    type="text"
                    value={text}
                    name="text"
                    onChange={this.handleChange}
                    className="form-element  text-center col-md-10"
                    placeholder="Enter name of product to search..."
                />
                <button
                    type="submit"
                    className="form-element btn btn-primary button text-center col-md-3 col-sm-3"
                >
                    Find
                </button>
            </form>
        );
    }
}

ProductsInput.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default ProductsInput;
