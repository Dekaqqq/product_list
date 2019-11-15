import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { ListCategoryDescription } from '../../styledComponents/styled';
import { getValue } from '../../redux/value';

const categories = [
    {
        text: 'All Categories',
        path: '/',
    },
    {
        text: 'Home & Kitchen',
        path: '/Home&Kitchen',
    },
    {
        text: 'Sports & Outdoors',
        path: '/Sports&Outdoors',
    },
    {
        text: 'Health & Personal Care',
        path: '/Health&PersonalCare',
    },
    {
        text: 'Baby Products',
        path: '/BabyProducts',
    },
];

const CategoryList = ({ selectCategory, location, value }) => {
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
                                onClick={() => selectCategory(el)}
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

CategoryList.propTypes = {
    selectCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    value: getValue(state),
});

export default compose(connect(mapStateToProps), withRouter)(CategoryList);
