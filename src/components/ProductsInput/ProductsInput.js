import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getValue } from '../../redux/value';
import { getCategory } from '../../redux/category';

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

    // componentDidUpdate(prevProps) {
    //     // const { location, onSearch } = this.props;
    //     // const searchValue = location.search;
    //     // const index = searchValue.lastIndexOf('=');
    //     // const result = searchValue.substring(index + 1);
    //     // if (prevProps.location.pathname !== location.pathname) {
    //     //     // this.setState(
    //     //     //     {
    //     //     //         text: result,
    //     //     //     },
    //     //     //     () => onSearch(result),
    //     //     // );
    //     // }
    // }

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
    category: getCategory(state),
});

export default compose(connect(mapStateToProps), withRouter)(ProductsInput);
