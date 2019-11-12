import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { fetchData, URL } from '../../services/fetchData';
import ProductsList from '../ProdutsList/ProductsList';
import ProductsInput from '../ProductsInput/ProductsInput';

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

    render() {
        const { isLoading, error, products, value } = this.state;

        const filteredProducts = value
            ? products.filter(el =>
                  el.name.toLowerCase().includes(value.toLowerCase()),
              )
            : products;

        return (
            <div>
                {isLoading && (
                    <Loader
                        type="Triangle"
                        color="#00BFFF"
                        style={{ textAlign: 'center' }}
                    />
                )}
                {error && <ToastContainer autoClose={1500} />}
                <ProductsInput onSearch={this.onSearch} />
                {products.length > 0 && (
                    <ProductsList products={filteredProducts} />
                )}
            </div>
        );
    }
}

export default App;
