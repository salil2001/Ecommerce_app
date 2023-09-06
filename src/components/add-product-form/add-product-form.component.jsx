import "./add-product-form.styles.scss";

import { useState } from "react";
import { addProduct } from "../../store/products/product.action";
import { selectProductsArray } from "../../store/products/product.selector";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
function AddProductForm() {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const products = useSelector(selectProductsArray);

  const navigate = useNavigate();

  const handelAddProduct = () => {
    const newProduct = {
      title,
      description,
      price: Number(price),
      rating: Number(rating),
      images: [image],
      id: Date.now(),
    };

    dispatch(addProduct(products, newProduct));
    toast("Product Added TO db");
    navigate("/allProds");
  };

  return (
    <div className="form-container">
      <div className="add_prod_title">Add Product</div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image Url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button className="add-prod-button" onClick={handelAddProduct}>
        Add Product
      </button>
    </div>
  );
}

export default AddProductForm;
