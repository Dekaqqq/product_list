import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const ProductsItem = ({ img, name, bsr_category, link }) => {
    const shortName = name.slice(0, 16);

    return (
        <Card style={{ width: '10rem', marginBottom: '1rem' }}>
            <Card.Img variant="top" src={img} height="140" />
            <Card.Body>
                <Card.Title>{bsr_category}</Card.Title>
                <Card.Text>{shortName}</Card.Text>
                <Card.Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Show More
                </Card.Link>
            </Card.Body>
        </Card>
    );
};

ProductsItem.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bsr_category: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default ProductsItem;
