import React from "react";
import styles from "../styles/product.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";

// component to display product page
const ProductPage = (props) => {
  const {
    products,
    activeProduct,
    addToCart,
    selectSize,
    cart,
    displayCart,
    cartActive,
    errorMessage,
    hideCart,
    removeFromCart,
  } = props;

  return (
    <div className={styles.shoppagecontainer}>
      <Header
        cart={cart}
        displayCart={displayCart}
        cartActive={cartActive}
        hideCart={hideCart}
        removeFromCart={removeFromCart}
      />
      <div className={styles.productmaincontainer}>
        <ProductDetail
          activeProduct={activeProduct}
          addToCart={addToCart}
          selectSize={selectSize}
          errorMessage={errorMessage}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;