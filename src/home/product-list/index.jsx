import Grid from "@mui/material/Grid";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "@mui/material";

const ProductList = (props) =>  (
  props.productList?.map((productItem, index) => (
      <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
        <Card className="card-product">
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
                <Button variant="text">
                  <span> {productItem.title}</span>
                </Button>
              </Link>
            </Grid>

            <Grid item xs={2}>
              <span>${productItem.price}</span>
            </Grid>
          </Grid>
        </Card >
      </Grid>
    ))
  )

export default ProductList;
