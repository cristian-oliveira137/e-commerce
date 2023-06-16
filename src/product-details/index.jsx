import Grid from "@mui/material/Grid";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import ProductService from "../home/service";

const ProductDetails = () => {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState();
  const getProductDetails = useCallback(async () => {
    const service = new ProductService();
    if (id) {
      const details = await service.getProductDetails(parseInt(id));
      setProductDetails(details);
    }
  }, []);

  useEffect(() => {
    getProductDetails();
  });

  return (
    <Container>
      {productDetails && (
        <Grid item xs={6} sm={4} md={3}>
          <Grid
            container
            padding={3}
            alignItems="center"
            direction="column"
            justifyContent="center"
          >
            <Grid item>{productDetails.image}</Grid>

            <Grid item>
              <a rel="stylesheet" href="/product-details">
                {productDetails.title}
              </a>
            </Grid>

            <Grid item>
              <span>{productDetails.price}</span>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
export default ProductDetails;
