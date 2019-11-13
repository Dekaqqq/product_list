import React from 'react';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { ListCategoryDescription } from '../../styledComponents/styled';

const CategoryList = ({ categories, selectCategory }) => {
    return (
        <>
            <ul className="col-sm-2 col-md-4">
                {categories.map(el => (
                    <li key={shortid.generate()}>
                        <NavLink to={el.replace(/\s/g, '')}>
                            <ListCategoryDescription
                                onClick={() => selectCategory(el)}
                            >
                                {el}
                            </ListCategoryDescription>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
};

CategoryList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    selectCategory: PropTypes.func.isRequired,
};

export default CategoryList;
