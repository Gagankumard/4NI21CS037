import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './component/ProductList';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [topN, setTopN] = useState(10); // Default top N products

  const handleTopNChange = (event) => {
    setTopN(event.target.value);
  };

  const fetchTopProducts = async () => {
    setLoading(true);
    setError(null);

    const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5OTkxNTUyLCJpYXQiOjE3MTk5OTEyNTIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImMyNDE1MGViLTE0YWMtNDIxZS04Y2ZkLTAzMDhmNDUxZTJiOSIsInN1YiI6ImdhZ2Fua3VtYXJkZDM5QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6Ik5JRUNTRSIsImNsaWVudElEIjoiYzI0MTUwZWItMTRhYy00MjFlLThjZmQtMDMwOGY0NTFlMmI5IiwiY2xpZW50U2VjcmV0IjoidXFvV0JrZk9tT0N5ZkdFcSIsIm93bmVyTmFtZSI6IkdhZ2FuIEt1bWFyIEQiLCJvd25lckVtYWlsIjoiZ2FnYW5rdW1hcmRkMzlAZ21haWwuY29tIiwicm9sbE5vIjoiNE5JMjFDUzAzNyJ9.mUJ7Ro9yWN_p874AuLXNuTg-Dm4iVh-lf0xtoyo4rj4';
    try {
  const response = await axios.get(
    `test/companies/AMZ/categories/Laptop/products`,{params: {
          top: 10,
          minPrice: 1,
          maxPrice: 10000
        },
    
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      }
    }
  );
  setProducts(response.data); // Assuming response.data is an array of products
} catch (error) {
  console.error("Error fetching products:", error);
  setError(error.message);
} finally {
  setLoading(false);
}

  };

  const handleSubmit = () => {
    fetchTopProducts();
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Top Products
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField
            id="topN"
            label="Top N"
            type="number"
            value={topN}
            onChange={handleTopNChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Show Top N
          </Button>
        </Grid>
      </Grid>
      {loading && <Typography variant="body1">Loading...</Typography>}
      {error && <Typography variant="body1" color="error">{`Error: ${error}`}</Typography>}
      {!loading && !error && <ProductList products={products} />}
    </Container>
  );
};

export default App;
