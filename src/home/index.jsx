import Grid from "@mui/material/Grid";
import React from "react";
import Header from "./header";
import Search from "./search/view";
import ProductList from "./product-list/product-list";

const Home = () => {
  return (
    <Grid
      container
      padding={4}
      columnSpacing={3}
      alignItems="flex-start"
      direction="column"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item>
        <Search />
      </Grid>
      <Grid item>
        <ProductList />
      </Grid>
    </Grid>
  );
};
export default Home;
