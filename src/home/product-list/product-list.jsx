import Grid from "@mui/material/Grid";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../service";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import {
  CardProduct,
  CircularContainer,
  ProductNameButton,
  ProductName,
} from "../../styles";
import { css } from "@emotion/react";
const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getAllProducts = useCallback(async () => {
    const service = new ProductService();
    setLoading(true);
    try {
      const list = await service.getAllProducts();
      setProductList(list);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <div>
      <Grid
        container
        padding={1}
        rowSpacing={2}
        columnSpacing={2}
        alignItems="center"
        justifyContent="center"
        wrap="wrap"
      >
        {error ? (
          <MuiAlert elevation={6} variant="filled" />
        ) : loading ? (
          <CircularContainer>
            <CircularProgress color="inherit" />
          </CircularContainer>
        ) : (
          productList?.map((productItem, index) => (
            <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
              <CardProduct>
                <Grid
                  container
                  alignItems="center"
                  direction="column"
                  justifyContent="center"
                  wrap="wrap"
                >
                  <Grid item xs={6}>
                    <div>
                      <img
                        src={productItem.image}
                        alt={productItem.title}
                        width={50}
                        heigth={50}
                      />
                    </div>
                  </Grid>

                  <Grid item xs={4}>
                    <Link to={`/detalhes/${productItem.id}`}>
                      <ProductNameButton variant="text">
                        <ProductName> {productItem.title}</ProductName>
                      </ProductNameButton>
                    </Link>
                  </Grid>

                  <Grid item xs={2}>
                    <span>${productItem.price}</span>
                  </Grid>
                </Grid>
              </CardProduct>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};
export default ProductList;
