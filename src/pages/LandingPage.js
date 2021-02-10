import React from "react";
import styles from "../styles/landing.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import crocsRed from "../assets/crocsRed.png";

// component to display landing page
const LandingPage = (props) => {
  const { cart, displayCart, cartActive, hideCart, removeFromCart } = props;

  return (
    <div className={styles.landingpagecontainer}>
      <Header
        cart={cart}
        displayCart={displayCart}
        cartActive={cartActive}
        hideCart={hideCart}
        removeFromCart={removeFromCart}
      />
      <div className={styles.landingmaincontainer}>
        <img className={styles.mainimage} src={crocsRed} />
        <p className={styles.maintext}>
          NOT QUITE A SLIPPER, NOT <br />
          QUITE A SHOE
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
