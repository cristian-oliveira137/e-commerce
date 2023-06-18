import Grid from "@mui/material/Grid";
import React from "react";
import Header from "./header/index";
import Search from "./search/index";
import ProductList from "./product-list/index";
import ProductService from "./service";

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
    } catch {
      setError(true);
      console.error("Erro ao listar produtos", error);
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
    } catch {
      console.error("Erro ao listar categorias", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const onSearch = async (searchValue) => {
    setLoading(true);
    try {
      const searchResponse = await service.searchProduct(searchValue);
      setProductList(searchResponse);
      setError(false);
    } catch (error) {
      console.error("Erro ao buscar produto", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onChangeCategory = async (category) => {
    setLoading(true);
    try {
      const categoryProductList = await service.changeCategory(category);
      setProductList(categoryProductList);
      setError(false);
    } catch (error) {
      console.error("Erro ao buscar produtos da categoria", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, [getAllProducts]);

  return (
    <Grid
      container
      columnSpacing={3}
      alignItems="flex-start"
      direction="column"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Search onSearch={onSearch} onChangeCategory={onChangeCategory} categories={categories} />
      </Grid>
      <Grid item>
        <div>
          <Grid
            container
            padding={1}
            rowSpacing={2}
            columnSpacing={2}
            alignItems="center"
            justifyContent="center"
            wrap="wrap"
          >
            {error ? (
              <MuiAlert elevation={6} variant="filled" />
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
