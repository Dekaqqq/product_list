import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { fetchData, URL } from '../../services/fetchData';
import ProductsList from '../ProdutsList/ProductsList';
import ProductsInput from '../ProductsInput/ProductsInput';
import CategoryList from '../CategoryList/CategoryList';

const getUniqueCategories = products => {
    return products.reduce((acc, el) => {
        if (!acc.includes(el.bsr_category)) acc.push(el.bsr_category);
        return acc;
    }, []);
};

class App extends Component {
    state = {
        isLoading: false,
        error: null,
        products: [],
        value: '',
    };

    componentDidMount() {
        this.setState({
            isLoading: true,
        });

        fetchData(URL)
            .then(({ products }) => this.setState({ products }))
            .catch(error => {
                this.setState({ error: error.message });
                this.handleError(error.message);
            })
            .finally(() => this.setState({ isLoading: false }));
    }

    handleError = msg => {
        toast.error(msg, {
            position: toast.POSITION.TOP_CENTER,
        });
    };

    onSearch = value => {
        this.setState({ value });
    };

    selectCategory = category => {
        this.onSearch(category);
    };

    render() {
        const { isLoading, error, products, value } = this.state;
        const categories = getUniqueCategories(products);

        const filteredProducts = value
            ? products.filter(
                  el =>
                      el.name.toLowerCase().includes(value.toLowerCase()) ||
                      el.bsr_category
                          .toLowerCase()
                          .includes(value.toLowerCase()),
              )
            : products;

        return (
            <div className="container">
                {isLoading && (
                    <Loader
                        type="Triangle"
                        color="#00BFFF"
                        style={{ textAlign: 'center' }}
                    />
                )}
                {error && <ToastContainer autoClose={1500} />}
                <ProductsInput onSearch={this.onSearch} />
                <div className="row">
                    <CategoryList
                        categories={categories}
                        selectCategory={this.selectCategory}
                    />
                    {products.length > 0 && (
                        <ProductsList products={filteredProducts} />
                    )}
                </div>
            </div>
        );
    }
}

export default App;
