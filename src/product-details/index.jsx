import Grid from "@mui/material/Grid";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Container } from "@mui/material";
import ProductService from "../home/service";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from '@mui/material/Alert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
    <Container className="details">
      <Grid container direction='column' alignItems='center' >
        <Grid item>
          <div className="seta-voltar">
            <Link to={`/home`}>
              <Button variant="text">
                <ArrowBackIcon alt="seta voltar"
                  width={24}
                  heigth={24}
                  color="blue" />
              </Button>
            </Link>
          </div>
        </Grid>
        {error ? (
          <Alert severity="error" >Erro ao buscar detalhes de produto</Alert>
        ) : loading ? (
          <div className="circular-container">
            <CircularProgress color="inherit" />
          </div>
        ) : (
          productDetails && (
            <Grid item>
              <div className="details-container">
                <Grid
                  container
                  alignItems="center"
                  direction="column"
                  justifyContent="center"
                  spacing={2}
                >
                  <Grid item>
                    <div className="details-image">
                      <img
                        src={productDetails.image}
                        alt={productDetails.title}
                        width={100}
                        heigth={100}
                      />
                    </div>
                  </Grid>

                  <Grid item>
                    <span className="details-title">{productDetails.title}</span>
                  </Grid>

                  <Grid item>
                    <span className="product-price">${productDetails.price}</span>
                  </Grid>
                  <Grid item >
                    <span className="details-description"> {productDetails.description}</span>
                  </Grid>

                  <Grid item>
                    <Grid container direction="column">
                      <div className="rating-container">
                        <Grid item>
                          <span className="rating">Avaliações</span>
                        </Grid>
                        <Grid item>
                          <Grid container justifyContent="space-around" direction='row'>
                            <Grid item xs>
                              <span className="rate-count">{productDetails.rating.rate}/5</span>
                            </Grid>
                            <Grid item xs className='count'>
                              <span className="rate-count count">{productDetails.rating.count}</span>
                            </Grid>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          )
        )}
      </Grid>

    </Container >
  );
};
export default ProductDetails;
