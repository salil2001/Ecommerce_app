// import React from "react";
import "./sort.styles.scss";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsArray } from "../../store/products/product.selector";
import { selectIsSorted } from "../../store/products/product.selector";
import { selectSortedProds } from "../../store/products/product.selector";
import {
  sortProduct,
  unsortProduct,
} from "../../store/products/product.action";

function Sort() {
  const products = useSelector(selectProductsArray);
  const sortedProds = useSelector(selectSortedProds);
  const isSorted = useSelector(selectIsSorted);

  const dispatch = useDispatch();

  const handelSort = () => {
    if (!isSorted) {
      dispatch(sortProduct(sortedProds));
      toast("Products Sorted!");
    } else {
      dispatch(unsortProduct(products));
      toast("Products Unsorted!");
    }
  };

  return (
    <div onClick={handelSort} className="sort-btn">
      {isSorted ? <p>X Sort by price</p> : <p>Sort by price</p>}
    </div>
  );
}

export default Sort;
