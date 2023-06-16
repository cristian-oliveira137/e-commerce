import Grid from "@mui/material/Grid";
import React, { useCallback, useEffect, useState } from "react";
import { Product } from "../model";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import ProductDetails from "../../product-details/index";
import { Card } from "@mui/material";
import ProductService from "../service";

const ProductList: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const getAllProducts = useCallback(async () => {
    const service = new ProductService();
    const list = await service.getAllProducts();
    setProductList(list);
  }, []);

  useEffect(() => {
    getAllProducts();
  });

  return (
    <Router>
      <Grid container padding={4} alignItems="center" justifyContent="center">
        {productList?.map((productItem, index) => (
          <Grid key={index} item xs={6} sm={4} md={3}>
            <Card>
              <Grid
                container
                padding={1}
                alignItems="center"
                direction="column"
                justifyContent="center"
              >
                <Grid item>{productItem.image}</Grid>

                <Grid item>
                  <Link to={`/detalhes${productItem.id}`}>
                    {productItem.title}
                  </Link>
                </Grid>

                <Grid item>
                  <span>{productItem.price}</span>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
        <Route path="/detalhes/:id">
          <ProductDetails />
        </Route>
      </Grid>
    </Router>
  );
};
export default ProductList;
