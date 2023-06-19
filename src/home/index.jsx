import Grid from "@mui/material/Grid";
import React, { useEffect, useState, useCallback } from "react";
import Header from "./header/index";
import Search from "./search/index";
import ProductList from "./product-list/index";
import ProductService from "./service";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert } from "@mui/material";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const service = new ProductService();

  const getAllProducts = useCallback(async () => {
    setLoading(true);
    try {
      const list = await service.getAllProducts();
      setProductList(list);
      setError(false);
    } catch(err) {
      setError(true);
      console.error("Erro ao listar produtos", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const getAllCategories = useCallback(async () => {
    setLoading(true);
    try {
      const list = await service.getAllCategories();
      setCategories(list);
      setError(false);
    } catch(err) {
      console.error("Erro ao listar categorias", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const onSearch = async (searchValue) => {
    if(!searchValue){
      getAllProducts();
    } else {
    setLoading(true);
    try {
      const searchResponse = await service.searchProduct(searchValue);
      setProductList(searchResponse);
      setError(false);
    } catch (err) {
      console.err("Erro ao buscar produto", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  };

  const onChangeCategory = async (category) => {
    if(category==='Todos'){
        getAllProducts();
    } else {
      setLoading(true);
      try {
        const categoryProductList = await service.changeCategory(category);
        setProductList(categoryProductList);
        setError(false);
      } catch (err) {
        console.error("Erro ao buscar produtos da categoria", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, [getAllProducts, getAllCategories]);

  return (
 
    <Grid
      container
      columnSpacing={3}
      alignItems="flex-start"
      direction="column"
    >
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={12}>
      <div 
      className="container"
      >
        <Search
          onSearch={onSearch}
          onChangeCategory={onChangeCategory}
          categories={categories}
        />
        </div>
      </Grid>
      <Grid item>
        <div className="list">
          <Grid
            container
            padding={1}
            rowSpacing={2}
            columnSpacing={2}
            justifyContent="flex-start"
           alignItems="flex-start"
            wrap="wrap"
          >
            {error ? (
              <Alert severity='error'>Ocorreu um erro, tente novamente mais tarde</Alert>
            ) : loading ? (
              <div className="circular-container">
                <CircularProgress color="inherit" />
              </div>
            ) : (
              <ProductList productList={productList} />
            )}
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};
export default Home;
