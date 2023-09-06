import { PRODUCTS_ACTION_TYPES } from "./product.type";

import { createAction } from "../../utils/reducer/reducer.utils";
import { getProducts } from "../../utils/fetching/fetchProducts";

export const fetchProductsStart = () =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START);

export const fetchCategoriesSuccess = (products) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, products);

export const fetchProductsFailure = (err) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, err);

export const fetchProductsAsync = () => {
  return async (dispatch) => {
    dispatch(fetchProductsStart());
    try {
      const products = await getProducts();
      const sortedProds = JSON.parse(JSON.stringify(products));

      dispatch(
        fetchCategoriesSuccess({ products: products, sortedProds: sortedProds })
      );
    } catch (err) {
      dispatch(fetchProductsFailure(err));
    }
  };
};

export const sortProduct = (sortedProducts) => {
  const sortedProduct = sortedProducts.data.sort((a, b) => a.price - b.price);
  return createAction(PRODUCTS_ACTION_TYPES.SORT_PRODUCTS_BY_PRICE, {
    ...sortedProducts,
    data: sortedProduct,
  });
};

export const unsortProduct = (products) => {
  return createAction(PRODUCTS_ACTION_TYPES.UNSORT_PRODUCTS, products);
};

export const saveEditProduct = (products, productToEdit, newValues) => {
  const { title, price, description, rating } = newValues;

  const productIndex = products.data.findIndex(
    (product) => product.id === productToEdit.id
  );

  const newProduct = {
    ...products.data[productIndex],
    title: title,
    price: Number(price),
    description: description,
    rating: Number(rating),
  };

  products.data[productIndex] = newProduct;

  const newProducts = { ...products };

  const sortedProds = JSON.parse(JSON.stringify(newProducts));

  return createAction(PRODUCTS_ACTION_TYPES.EDIT_PRODUCTS, {
    products: newProducts,
    sortedProds: sortedProds,
  });
};

export const deleteProduct = (products, productToDelete) => {
  const newProductsArray = products.data.filter((product) => {
    return product.id !== productToDelete.id;
  });

  const newProducts = { ...products.data, data: newProductsArray };
  const sortedProds = JSON.parse(JSON.stringify(newProducts));

  return createAction(PRODUCTS_ACTION_TYPES.DELETE_PRODUCT, {
    products: newProducts,
    sortedProds: sortedProds,
  });
};

export const addProduct = (products, productToAdd) => {
  products.data.push(productToAdd);

  const newProducts = { ...products };

  const sortedProds = JSON.parse(JSON.stringify(newProducts));

  return createAction(PRODUCTS_ACTION_TYPES.EDIT_PRODUCTS, {
    products: newProducts,
    sortedProds: sortedProds,
  });
};
