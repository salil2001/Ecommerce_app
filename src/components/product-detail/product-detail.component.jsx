import "./product-detail.componet.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectProductsArray } from "../../store/products/product.selector";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import { toast } from "react-toastify";

function ProductDetail() {
  const { id } = useParams();
  const products = useSelector(selectProductsArray);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const product = products.data.filter(
    (product) => Number(id) === product.id
  )[0];

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
    toast("Product Added to cart!");
  };

  return (
    <div className="product-details">
      <div className="image-container">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="details-title-price-buy">
        <div className="title">
          <h3>{product.title}</h3>
        </div>
        <div className="details">{product.description}</div>
        <div className="price">Rs. {product.price}</div>
        <div className="addToCart">
          <button onClick={addProductToCart} className="add-prod-button">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
