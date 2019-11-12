import React from 'react';
import PropTypes from 'prop-types';

const ProductsItem = ({ img, brand, name, bsr_category, link, price }) => {
    const shortName = name.slice(0, 16);

    return (
        <li className="list-item">
            <img
                src={img}
                alt={brand}
                className="list-item__img"
                width="120"
                height="150"
            />
            <h3 className="list-item__headline">{bsr_category}</h3>
            <p className="list-item__name">{shortName}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="list-item__link"
            >
                Show Product
            </a>
            <p className="list-item__price">{price} $</p>
        </li>
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
