import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, withRouter } from 'react-router-dom';
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
import { getSearchValue } from '../../services/fetchData';

class App extends Component {
    componentDidMount() {
        const { location, fetchData, changeCategory } = this.props;

        fetchData();

        changeCategory(location.pathname.slice(1));

        if (location.search) {
            const result = getSearchValue(location.search);

            this.onSearch(result);
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

    handleChange = value => {
        this.onSearch(value);
    };

    render() {
        const { loading } = this.props;

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
                        <CategoryList />
                    </Col>
                    <Col sm={9}>
                        <Route path="/" component={ProductsList} />
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
