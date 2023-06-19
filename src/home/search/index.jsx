import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Search = ({onSearch, onChangeCategory, categories}) => {

  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("Todos");
    
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchValue);
    }
  };

  const handleChangeCategory = (categorySelected) => {
   setCategory(categorySelected);
   onChangeCategory(categorySelected);
  };

  return (
    <div className="search">
    <Grid  container columnSpacing={4} rowSpacing={2} justifyContent='space-around' alignItems='center'>
      <Grid item xs={12} md={8}>
        <div className="input-search">
          <TextField
            variant="outlined"
            className="input"
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Pesquise um produto aqui..."
            />
          </div>
      </Grid>
      <Grid item xs={12} md={4}>
    <Grid container spacing={1} justifyContent='flex-end' alignItems='center'>
      <Grid item xs={12} sm={2} md={3}>
        <span className="category-label">Categorias</span>
        </Grid>
      <Grid item xs> 
        <Box >
      <FormControl fullWidth  className="category-select">
        <Select
          value={category}
          onChange={(event)=> handleChangeCategory(event.target.value.toString())}
          >
          {['Todos',...categories].map((item)=> (
            <MenuItem value={item}>{item}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
    </Grid>
    </Grid>
    </Grid>
    </Grid>
    </div>
  );
};
export default Search;
