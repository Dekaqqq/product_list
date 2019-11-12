import React from 'react';
import PropTypes from 'prop-types';
import {
    ListItem,
    ListItemLink,
    ListItemName,
    ListItemPrice,
} from '../../../styledComponents/styled';

const ProductsItem = ({ img, brand, name, bsr_category, link, price }) => {
    const shortName = name.slice(0, 16);

    return (
        <ListItem className="col-md-4">
            <img
                src={img}
                alt={brand}
                className="list-item__img"
                width="120"
                height="150"
            />
            <h3 className="list-item__headline">{bsr_category}</h3>
            <ListItemName className="list-item__name">{shortName}</ListItemName>
            <ListItemLink
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="list-item__link"
            >
                Show Product
            </ListItemLink>
            <ListItemPrice className="list-item__price">
                {price} $
            </ListItemPrice>
        </ListItem>
    );
};

ProductsItem.propTypes = {
    img: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bsr_category: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default ProductsItem;
