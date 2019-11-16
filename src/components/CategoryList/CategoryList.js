import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import shortid from 'shortid';
import { ListCategoryDescription } from '../../styledComponents/styled';
import { getValue } from '../../redux/value';
import { addCategory } from '../../redux/category';
import { getProducts } from '../../redux/products';

const categories = [
    {
        text: 'All Categories',
        path: '/',
    },
    {
        text: 'Home & Kitchen',
        path: '/Home & Kitchen',
    },
    {
        text: 'Sports & Outdoors',
        path: '/Sports & Outdoors',
    },
    {
        text: 'Health & Personal Care',
        path: '/Health & PersonalCare',
    },
    {
        text: 'Baby Products',
        path: '/Baby Products',
    },
];

const CategoryList = ({ location, value, setCategory }) => {
    return (
        <>
            <ul>
                {categories.map(el => (
                    <li key={shortid.generate()}>
                        <NavLink
                            to={{
                                pathname: el.path,
                                search: value ? location.search : null,
                            }}
                        >
                            <ListCategoryDescription
                                onClick={() => setCategory(el.text)}
                            >
                                {el.text}
                            </ListCategoryDescription>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
};

const mapStateToProps = state => ({
    products: getProducts(state),
    value: getValue(state),
});

const mapDispatchToProps = dispatch => ({
    setCategory: category => dispatch(addCategory(category)),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(CategoryList);
