import Grid from "@mui/material/Grid";
import React, { useCallback, useEffect, useState } from "react";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import ProductDetails from "../../product-details/index";
import { Card } from "@mui/material";
import ProductService from "../service";
import { styled } from "@mui/system";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const getAllProducts = useCallback(async () => {
    const service = new ProductService();

    const list = await service.getAllProducts();
    setProductList(list);
  }, []);

  useEffect(() => {
    getAllProducts();
  });

  const CardProduct = styled(Card)`
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 16px;
    height: 175px;
  `;

  return (
    <div>
      <BrowserRouter>
        <Grid
          container
          padding={1}
          rowSpacing={2}
          columnSpacing={2}
          alignItems="center"
          justifyContent="center"
          wrap="wrap"
        >
          {productList?.map((productItem, index) => (
            <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
              <CardProduct>
                <Grid
                  container
                  alignItems="center"
                  direction="column"
                  justifyContent="center"
                  wrap="wrap"
                >
                  <Grid item>
                    <img
                      src={productItem.image}
                      alt={productItem.title}
                      width={50}
                      heigth={50}
                    />
                  </Grid>

                  <Grid item>
                    <Link to={`/detalhes/${productItem.id}`}>
                      {productItem.title}
                    </Link>
                  </Grid>

                  <Grid item>
                    <span>${productItem.price}</span>
                  </Grid>
                </Grid>
              </CardProduct>
            </Grid>
          ))}
          <Routes>
            <Route path="/detalhes/:id" />
          </Routes>
        </Grid>
      </BrowserRouter>
    </div>
  );
};
export default ProductList;
