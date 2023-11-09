import { useState } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";
import ProductsData from '../../data.json'
import Slider from "react-slick";


const Products = () => {

  const [products] = useState(ProductsData)

  const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: products.length,
      slidesToScroll: 1
  }
   
  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Winter Collection New Morden Design</p>
        </div>
        <div className="product-wrapper product-carousel">
          <div className="glide__track">
              {console.log(products)}
              <Slider {...sliderSettings}>
                   {products.map((product) => (
                    <ProductItem key={product.id} product={product} />   
                    ))}
             </Slider>


          </div>
          <div className="glide__arrows">
            <button className="glide__arrow glide__arrow--left">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button className="glide__arrow glide__arrow--right">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;