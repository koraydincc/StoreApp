import { useState } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";
import ProductsData from '../../data.json'
import Slider from "react-slick";



function NextBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}


function PrevBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}


const Products = () => {

  const [products] = useState(ProductsData)




  const sliderSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextBtn></NextBtn>,
      prevArrow: <PrevBtn></PrevBtn>,
      autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
            
          
          </div>
        </div>
    </div>
    </section>
);
};

export default Products;