import Grid from "@mui/material/Grid";
import React from "react";
import Information from "./info";
import Search from "./search/view";
import ProductList from "./product-list/product-list";

const Home = () => {
  return (
    <Grid
      container
      padding={4}
      alignItems="flex-start"
      direction="column"
      justifyContent="center"
    >
      <Grid item>
        <Information />
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
