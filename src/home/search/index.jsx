import { Input } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";

const Search = ({onSearch, onChangeCategory, categories,}) => {

  const [searchValue, setSearchValue] = useState("");
    const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchValue);
    }
  };

  return (
    <Grid container>
      <Grid item>
        <Input
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Pesquise um produto aqui..."
        />
      </Grid>
    </Grid>
  );
};
export default Search;
