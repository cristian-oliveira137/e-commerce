class ProductService {
  async getAllProducts() {
    return await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
  }

  async getProductDetails(id) {
    return await fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
      res.json()
    );
  }

  async searchProduct(searchValue) {
    return await fetch(
      `https://fakestoreapi.com/products/search?query=${searchValue}`
    ).then((res) => res.json());
  }

  async changeCategory(category) {
    return await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    ).then((res) => res.json());
  }

  async getAllCategories() {
    return await fetch(
      `https://fakestoreapi.com/products/categories`
    ).then((res) => res.json());
  }
}
export default ProductService;
