import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App/App';
import store from '../redux/store/store';
// import { Provider } from 'react-redux';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Loader from 'react-loader-spinner';
// import Col from 'react-bootstrap/Col';
// import store from '../redux/store/store';
// import App from '../components/App/App';
// import ProductsInput from '../components/ProductsInput/ProductsInput';
// import ProductList from '../components/ProdutsList/ProductsList';
// import { List } from '../styledComponents/styled';

describe('App Component', () => {
    const wrapper = shallow(<App store={store} />);

    it('Should render app', () => {
        expect(wrapper.length).toBe(1);
    });
});

// it('App renders a ProductsInput', () => {
//     const wrapped = shallow(
//         <Provider store={store}>
//             <App>
//                 <Container>
//                     <Loader
//                         type="Triangle"
//                         color="#00BFFF"
//                         style={{ textAlign: 'center' }}
//                     />
//                     <Row>
//                         <Col>
//                             <ProductsInput />
//                         </Col>
//                     </Row>
//                 </Container>
//             </App>
//         </Provider>,
//     );
//     wrapped.setState({ loading: false });

//     expect(wrapped.find(Loader).length).toBe(0);
// });

// it('App does not render a Loader when loading is false', () => {
//     const wrapped = shallow(
//         <Container>
//             <Loader
//                 type="Triangle"
//                 color="#00BFFF"
//                 style={{ textAlign: 'center' }}
//             />
//         </Container>,
//     );
//     // wrapped.setState({ loading: false });

//     expect(wrapped.find(Loader).length).toBe(1);
// });

// it('ProductList render list', () => {
//     const wrapped = shallow(<ProductList />);

//     expect(wrapped.find(List).length.toBe(0));
// });
