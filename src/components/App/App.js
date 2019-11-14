import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ProductsList from '../ProdutsList/ProductsList';
import ProductsInput from '../ProductsInput/ProductsInput';
import CategoryList from '../CategoryList/CategoryList';
import { productsSelectors, productsActions } from '../../redux/products';
import getLoader from '../../redux/loader/selectors';
import getValue from '../../redux/value/selectors';
import addValue from '../../redux/value/action';
import addCategory from '../../redux/category/action';

const getUniqueCategories = products => {
    return products.reduce((acc, el) => {
        if (!acc.includes(el.bsr_category)) acc.push(el.bsr_category);
        return acc;
    }, []);
};

class App extends Component {
    componentDidMount() {
        const { location, fetchData } = this.props;

        fetchData();

        if (location.search) {
            const searchValue = location.search;
            const index = searchValue.lastIndexOf('=');
            const result = searchValue.substring(index + 1);
            this.onSearch(result);
        }
    }

    onSearch = value => {
        const { history, location, changeValue } = this.props;

        changeValue(value);

        if (value) {
            history.push({
                ...location,
                search: `item=${value}`,
            });
        }
    };

    selectCategory = category => {
        this.onSearch(category);
    };

    handleChange = ({ target }) => {
        const { value } = target;
        const { changeValue } = this.props;

        changeValue(value);
    };

    render() {
        const { loading, products } = this.props;
        const categories = getUniqueCategories(products);
        categories.unshift('All Categories');

        // Я понимаю, что лучше было бы захардкодить список катерогий, а не вычислять их динмачески,
        // тогда не пришлось бы делать лишние движение со списком, сделал так исключительно для практики

        return (
            <div className="container">
                {loading && (
                    <Loader
                        type="Triangle"
                        color="#00BFFF"
                        style={{ textAlign: 'center' }}
                    />
                )}
                <ProductsInput onSearch={this.handleChange} />
                <div className="row">
                    {categories.length >= 5 && (
                        <CategoryList
                            categories={categories}
                            selectCategory={this.selectCategory}
                        />
                    )}
                    <Switch>
                        <Route
                            path="/AllCategories"
                            exact
                            render={props => (
                                <ProductsList products={products} {...props} />
                            )}
                        />
                        <Route
                            path="/Home&Kitchen"
                            render={props => (
                                <ProductsList products={products} {...props} />
                            )}
                        />
                        <Route
                            path="/Sports&Outdoors"
                            render={props => (
                                <ProductsList products={products} {...props} />
                            )}
                        />
                        <Route
                            path="/Health&PersonalCare"
                            render={props => (
                                <ProductsList products={products} {...props} />
                            )}
                        />
                        <Route
                            path="/BabyProducts"
                            render={props => (
                                <ProductsList products={products} {...props} />
                            )}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: productsSelectors.getProducts(state),
    loading: getLoader(state),
    value: getValue(state),
});

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(productsActions.fetchProducts()),
    changeValue: value => dispatch(addValue(value)),
    addCategoryItem: category => dispatch(addCategory(category)),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(App);
