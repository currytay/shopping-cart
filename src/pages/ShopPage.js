import React from "react";
import styles from "../styles/shop.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";

// component to display shop page
const ShopPage = (props) => {
  const {
    products,
    clickProduct,
    cart,
    displayCart,
    cartActive,
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
      <div className={styles.shopmaincontainer}>
        <p className={styles.shoptext}>
          Original. Versatile. Comfortable. <br />
          <br />
          It’s the iconic clog that started a comfort revolution around the
          world! The irreverent go-to comfort shoe that you’re sure to fall
          deeper in love with day after day. Crocs Classic Clogs offer
          lightweight Iconic Crocs Comfort™, a color for every personality, and
          an ongoing invitation to be comfortable in your own shoes.
        </p>
        <div className={styles.productcontainer}>
          {products.map((product) => {
            return (
              <Products
                product={product}
                key={product.id}
                clickProduct={clickProduct}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
