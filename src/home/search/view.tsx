import { Input } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { useEffect } from "react";

const Search: React.FC = () => {
  const service = new ProductService();

  const searchProducts = () => {};

  return (
    <Grid container>
      <Grid item>
        <Input />
      </Grid>
    </Grid>
  );
};
export default Search;
