// ProductList component
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard.js';



const ProductList = ({ products}) => {
    // const [products, setProducts] = useState([]);

// Calling Fetch Product frOm the server
// async function fetchTopProducts(company, category, top, minPrice, maxPrice) {
//     try {
//         const response = await fetch(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
//         if (!response.ok) {
//             throw new Error('Failed to fetch products');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching products:', error.message);
//         return [];
//     }
// }



//     useEffect(() => {
//         const fetchProducts = async () => {
//             const data = await fetchTopProducts(company, category, top, minPrice, maxPrice);
//             setProducts(data);
//         };
//         fetchProducts();
//     }, [company, category, top, minPrice, maxPrice]);

    return (
        <div>
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
