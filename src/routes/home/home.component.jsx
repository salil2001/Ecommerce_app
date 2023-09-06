import React, { useEffect } from "react";
import HomeComponent from "../../components/home-component/home.component";

import { useDispatch } from "react-redux";
import { fetchProductsAsync } from "../../store/products/product.action";

function Home() {
  const dispatch = useDispatch();

  //Fetching product on application loading
  useEffect(() => {
    const getProducts = async () => {
      dispatch(fetchProductsAsync());
    };
    getProducts();
  }, []);

  return <HomeComponent />;
}

export default Home;
