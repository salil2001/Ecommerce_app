import { createSelector } from "reselect";

const selectProductsReducer = (state) => state.products;

export const selectProductsArray = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.products
);

export const selectSortedProds = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.sortedProds
);

export const selectIsLoading = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.isLoading
);

export const selectIsSorted = createSelector(
  [selectProductsReducer],
  (productsSlice) => productsSlice.isSorted
);
