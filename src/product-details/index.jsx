import Grid from "@mui/material/Grid";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "@mui/material";
import ProductService from "../home/service";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { CardProduct, ProductName, ProductNameButton } from "../styles";

const ProductDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [productDetails, setProductDetails] = useState();
  const getProductDetails = useCallback(async () => {
    if (id) {
      setLoading(true);
      const service = new ProductService();
      try {
        const details = await service.getProductDetails(parseInt(id));
        setProductDetails(details);
        setError(false);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  }, [id]);

  useEffect(() => {
    getProductDetails();
  }, [getProductDetails]);

  return (
    <Container>
      {error ? (
        <MuiAlert elevation={6} variant="filled" />
      ) : loading ? (
        <CircularProgress color="inherit" />
      ) : (
        productDetails && (
          <Grid item xs={6} sm={4} md={3} lg={2}>
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
                      src={productDetails.image}
                      alt={productDetails.title}
                      width={50}
                      heigth={50}
                    />
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <Link to={`/detalhes/${productDetails.id}`}>
                    <ProductNameButton variant="text">
                      <ProductName> {productDetails.title}</ProductName>
                    </ProductNameButton>
                  </Link>
                </Grid>

                <Grid item xs={2}>
                  <span>${productDetails.price}</span>
                </Grid>
              </Grid>
            </CardProduct>
          </Grid>
        )
      )}
    </Container>
  );
};
export default ProductDetails;
