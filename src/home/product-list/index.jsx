import Grid from "@mui/material/Grid";
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";

const ProductList = (props) =>  (
  props.productList?.map((productItem, index) => (
      <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
        <Card className="card-container card-product">
          <Grid
            container
            alignItems="center"
            direction="column"
            justifyContent="center"
            wrap="wrap"
            className="card-container"
            rowSpacing={2}
          >
            <Grid item>
              <div className='product-image'>
                <img
                  src={productItem.image}
                  alt={productItem.title}
                  width={50}
                  heigth={50}
                />
              </div>
            </Grid>

            <Grid item>
              <Link  className="product-title" to={`/detalhes/${productItem.id}`}>
                  <span> {productItem.title}</span>
              </Link>
            </Grid>

            <Grid item>
              <span className="product-price">${productItem.price}</span>
            </Grid>
          </Grid>
        </Card >
      </Grid>
    ))
  )

export default ProductList;
