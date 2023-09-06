import { CART_ACTION_TYPE } from "./cart.type";
import { createAction } from "../../utils/reducer/reducer.utils";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, productToRemove) => {
  const newCartItems = cartItems.filter(
    (item) => item.id !== productToRemove.id
  );

  return newCartItems;
};

export const incItems = (cartItems, productToInc) => {
  return cartItems.map((cartItem) =>
    cartItem.id === productToInc.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

export const decItems = (cartItems, productToDec) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToDec.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToDec.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToDec.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const addItemToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, product) => {
  const newCartItems = removeCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

export const incQuantity = (cartItems, product) => {
  const newCartItems = incItems(cartItems, product);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

export const decQuantity = (cartItems, product) => {
  const newCartItems = decItems(cartItems, product);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
