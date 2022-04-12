import { ProductConnection } from "../schema";
import { Product } from "@common/types/product";
import { fetchApi, normalizeProduct, getAllProductsQuery } from "../utils";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductsQuery,
  });

  // RETURNS PRODUCTS IN THE PRODUCTS CONNECTION
  // IF NULL RETURN EMPTY []
  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product);
    }) ?? [];

  return products;
};

export default getAllProducts;
