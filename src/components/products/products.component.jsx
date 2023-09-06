import React from "react";
import { useSelector } from "react-redux";
import { selectProductsArray } from "../../store/products/product.selector";
import { selectSortedProds } from "../../store/products/product.selector";
import { selectIsSorted } from "../../store/products/product.selector";
import ProductItem from "../product-item/product-item.component";

function Products() {
  const products = useSelector(selectProductsArray);
  const sortedProducts = useSelector(selectSortedProds);
  const isSorted = useSelector(selectIsSorted);

  const productsArray = products.data;

  return (
    <>
      {isSorted
        ? sortedProducts.data.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        : productsArray &&
          productsArray.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
    </>
  );
}

export default Products;
