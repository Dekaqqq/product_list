import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductsInput extends Component {
    state = {
        text: '',
    };

    componentDidMount() {
        const { location } = this.props;

        if (location.search) {
            const searchValue = location.search;
            const index = searchValue.lastIndexOf('=');
            const result = searchValue.substring(index + 1);

            this.setState({
                text: result,
            });
        }
    }

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

export default withRouter(ProductsInput);
