import Gallery from "../Gallery/Gallery";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import Info from "./Info/Info";
import "./ProductDetails.css";
import Tabs from "./Tabs";

const ProductDetails = ({ singleProduct }) => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <Breadcrumb />
          <div className="single-content">
            <main className="site-main">
              <Gallery singleProduct={singleProduct} />
              <Info singleProduct={singleProduct}/>
            </main>
          </div>
          <Tabs />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;