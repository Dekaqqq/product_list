import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import store from '../redux/store/store';
import App from '../components/App/App';
import ProductsInput from '../components/ProductsInput/ProductsInput';

it('App renders a ProductsInput', () => {
    const wrapped = shallow(
        <Provider store={store}>
            <App>
                <Container>
                    <Row>
                        <Col>
                            <ProductsInput />
                        </Col>
                    </Row>
                </Container>
            </App>
        </Provider>,
    );
    console.log(wrapped);

    expect(wrapped.find(ProductsInput).length).toBe(1);
});
