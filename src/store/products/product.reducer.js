import { PRODUCTS_ACTION_TYPES } from "./product.type";

export const PRODUCTS_INITIAL_STATE = {
  products: [],
  sortedProds: [],
  isLoading: false,
  isSorted: false,
  error: null,
};

export const productsReducer = (
  state = PRODUCTS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START:
      return { ...state, isLoading: true };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload.products,
        sortedProds: payload.sortedProds,
        isLoading: false,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
      return { ...state, error: payload, isLoading: false };
    case PRODUCTS_ACTION_TYPES.SORT_PRODUCTS_BY_PRICE:
      return { ...state, sortedProds: payload, isSorted: true };
    case PRODUCTS_ACTION_TYPES.UNSORT_PRODUCTS:
      return { ...state, products: payload, isSorted: false };
    case PRODUCTS_ACTION_TYPES.EDIT_PRODUCTS:
      return {
        ...state,
        products: payload.products,
        sortedProds: payload.sortedProds,
      };
    case PRODUCTS_ACTION_TYPES.DELETE_PRODUCT:
      return {
        ...state,
        products: payload.products,
        sortedProds: payload.sortedProds,
      };
    case PRODUCTS_ACTION_TYPES.ADD_PRODUCT:
      return {
        ...state,
        products: payload.products,
        sortedProds: payload.sortedProds,
      };
    default:
      return state;
  }
};
