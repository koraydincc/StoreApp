import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import "./ProductItem.css";
import { Link } from "react-router-dom";

const ProductItem = ({ productItem }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  // Check if productItem is undefined or null
  if (!productItem) {
    return <div>Error: Product not found</div>;
  }

  const filteredCart = cartItems.find(
    (cartItem) => cartItem._id === productItem._id
  );

  // Use optional chaining to handle undefined properties
  const originalPrice = productItem.price?.current || 0;
  const discountPercentage = productItem.price?.discount || 0;



  // Calculate discounted price
  const discountedPrice = originalPrice - (originalPrice * discountPercentage) / 100;

  return (
    <div className="product-item glide__slide glide__slide--active">
      <div className="product-image">
        <Link to={`products/${productItem._id}`}>
          <img src={productItem.img[0]} alt="" className="img1" />
          <img src={productItem.img[1]} alt="" className="img2" />
        </Link>
      </div>
      <div className="product-info">
        <Link to={`products/${productItem._id}`} className="product-title">
          {productItem.name}
        </Link>

        <div className="product-prices">
          <strong className="new-price">${discountedPrice.toFixed(2)}</strong>
          <span className="old-price">${originalPrice.toFixed(2)}</span>
        </div>
        <span className="product-discount">-{discountPercentage}%</span>
        <div className="product-links">
          <button
            className="add-to-cart"
            onClick={() =>
              addToCart({
                ...productItem,
                price: discountedPrice,
              })
            }
            disabled={filteredCart}
          >
            <i className="bi bi-basket-fill"></i>
          </button>
          <button>
            <i className="bi bi-heart-fill"></i>
          </button>
          <Link to={`products/${productItem._id}`} className="product-link">
            <i className="bi bi-eye-fill"></i>
          </Link>
          <a href="#">
            <i className="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
