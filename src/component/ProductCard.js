// ProductCard.js

import React from 'react';
import { Card, CardContent, Typography, Chip } from '@mui/material'; // Example using Material UI components

const ProductCard = ({ product }) => {
    const { productName, price, rating, discount, availability } = product;

    return (
        <Card variant="outlined" style={{ marginBottom: '20px', padding: '10px' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {productName}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Price: ${price}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Rating: {rating}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Discount: {discount}%
                </Typography>
                <Chip label={availability === 'yes' ? 'Available' : 'Out of Stock'} color={availability === 'yes' ? 'primary' : 'secondary'} />
            </CardContent>
        </Card>
    );
};

export default ProductCard;
