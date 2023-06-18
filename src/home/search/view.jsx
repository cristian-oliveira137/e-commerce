import { Input } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import ProductService from "../service";

const Search = () => {
  const service = new ProductService();

  const [searchValue, setSearchValue] = useState("");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const search = async () => {
    setLoading(true);
    try {
      const response = await service.getPaginatedProductList(searchValue);
      setProduct(response.data);
      setError(false);
    } catch (error) {
      console.error("Erro na solicitação:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container>
      <Grid item>
        <Input
          value={searchValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Pesquise um produto aqui..."
        />
      </Grid>
    </Grid>
  );
};
export default Search;
