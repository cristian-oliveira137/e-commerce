class ProductService {
  async getAllProducts() {
    const a = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    console.log(a);
    return a;
  }

  async getProductDetails(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    console.log("getProductDetails", res);
    return await res.json();
  }

  async getPaginatedProductList(searchValue) {
    const res = await fetch(
      `https://fakestoreapi.com/products/search?query=${searchValue}`
    );
    console.log("getPaginatedProductList", res);
    return await res.json();
  }
}
export default ProductService;
