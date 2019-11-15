import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import queryString from 'query-string';
import { Switch, Route, withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ProductsList from '../ProdutsList/ProductsList';
import ProductsInput from '../ProductsInput/ProductsInput';
import CategoryList from '../CategoryList/CategoryList';
import { getProducts, fetchProducts } from '../../redux/products';
import { getLoader } from '../../redux/loading';
import { getValue, addValue } from '../../redux/value';
import { addCategory, getCategory } from '../../redux/category';

const filterProductsByCategory = (products, category) =>
    products.filter(el =>
        el.bsr_category.toLowerCase().includes(category.toLowerCase()),
    );

const getSearchValue = props => queryString.parse(props).item;

class App extends Component {
    componentDidMount() {
        const { location, fetchData, changeValue } = this.props;

        fetchData();

        if (location.search) {
            const result = getSearchValue(location.search);

            this.onSearch(result);
            changeValue(result);
        }
    }

    onSearch = value => {
        const { history, location, changeValue } = this.props;

        changeValue(value);

        history.push({
            ...location,
            search: `item=${value}`,
        });
    };

    selectCategory = category => {
        const { changeCategory } = this.props;

        changeCategory(category.text);
    };

    handleChange = value => {
        this.onSearch(value);
    };

    render() {
        const { loading, products, location } = this.props;

        return (
            <Container>
                {loading && (
                    <Loader
                        type="Triangle"
                        color="#00BFFF"
                        style={{ textAlign: 'center' }}
                    />
                )}
                <Row className="justify-content-md-center">
                    <Col sm={10}>
                        <ProductsInput onSearch={this.handleChange} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <CategoryList selectCategory={this.selectCategory} />
                    </Col>
                    <Col sm={9}>
                        <Switch>
                            <Route
                                path="/"
                                exact
                                render={props => {
                                    return (
                                        <ProductsList
                                            products={products}
                                            {...props}
                                        />
                                    );
                                }}
                            />
                            <Route
                                path="/Home&Kitchen"
                                render={props => {
                                    const result = getSearchValue(
                                        location.search,
                                    );

                                    const filteredProducts = filterProductsByCategory(
                                        products,
                                        'Home & Kitchen',
                                    );

                                    const filteredProductsBySearchValue = result
                                        ? filteredProducts.filter(el =>
                                              el.name
                                                  .toLowerCase()
                                                  .includes(
                                                      result.toLowerCase(),
                                                  ),
                                          )
                                        : null;

                                    return (
                                        <ProductsList
                                            products={
                                                result
                                                    ? filteredProductsBySearchValue
                                                    : filteredProducts
                                            }
                                            {...props}
                                        />
                                    );
                                }}
                            />
                            <Route
                                path="/Sports&Outdoors"
                                render={props => {
                                    const result = getSearchValue(
                                        location.search,
                                    );
                                    const filteredProducts = filterProductsByCategory(
                                        products,
                                        'Sports & Outdoors',
                                    );

                                    const filteredProductsBySearchValue = result
                                        ? filteredProducts.filter(el =>
                                              el.name
                                                  .toLowerCase()
                                                  .includes(
                                                      result.toLowerCase(),
                                                  ),
                                          )
                                        : null;

                                    return (
                                        <ProductsList
                                            products={
                                                result
                                                    ? filteredProductsBySearchValue
                                                    : filteredProducts
                                            }
                                            {...props}
                                        />
                                    );
                                }}
                            />
                            <Route
                                path="/Health&PersonalCare"
                                render={props => {
                                    const result = getSearchValue(
                                        location.search,
                                    );
                                    const filteredProducts = filterProductsByCategory(
                                        products,
                                        'Health & Personal Care',
                                    );

                                    const filteredProductsBySearchValue = result
                                        ? filteredProducts.filter(el =>
                                              el.name
                                                  .toLowerCase()
                                                  .includes(
                                                      result.toLowerCase(),
                                                  ),
                                          )
                                        : null;

                                    return (
                                        <ProductsList
                                            products={
                                                result
                                                    ? filteredProductsBySearchValue
                                                    : filteredProducts
                                            }
                                            {...props}
                                        />
                                    );
                                }}
                            />
                            <Route
                                path="/BabyProducts"
                                render={props => {
                                    const result = getSearchValue(
                                        location.search,
                                    );
                                    const filteredProducts = filterProductsByCategory(
                                        products,
                                        'Baby Products',
                                    );

                                    const filteredProductsBySearchValue = result
                                        ? filteredProducts.filter(el =>
                                              el.name
                                                  .toLowerCase()
                                                  .includes(
                                                      result.toLowerCase(),
                                                  ),
                                          )
                                        : null;

                                    return (
                                        <ProductsList
                                            products={
                                                result
                                                    ? filteredProductsBySearchValue
                                                    : filteredProducts
                                            }
                                            {...props}
                                        />
                                    );
                                }}
                            />
                        </Switch>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    products: getProducts(state),
    loading: getLoader(state),
    value: getValue(state),
    category: getCategory(state),
});

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchProducts()),
    changeValue: value => dispatch(addValue(value)),
    changeCategory: category => dispatch(addCategory(category)),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(App);
