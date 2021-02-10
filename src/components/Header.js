import React from "react";
import styles from "../styles/headerfooter.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/crocsLogo.png";
import shoppingCart from "../assets/shopping-cart.svg";
import Cart from "../components/Cart";

// component to display header
const Header = (props) => {
  const { cart, displayCart, cartActive, hideCart, removeFromCart } = props;

  return (
    <>
      {cartActive && (
        <Cart
          cartActive={cartActive}
          hideCart={hideCart}
          cart={cart}
          removeFromCart={removeFromCart}
        />
      )}
      <div className={styles.headercontainer}>
        <div className={styles.headerleft}>
          <Link to="/" className={styles.link}>
            <h1 className={styles.headertitletext}>crocs</h1>
          </Link>
          <img className={styles.headerlogo} src={logo} />
        </div>
        <div className={styles.headeright}>
          <Link to="/shop" className={styles.link}>
            <h2 className={styles.shoptext}>SHOP</h2>
          </Link>
          <div className={styles.cartcontainer}>
            <img
              className={styles.cartimg}
              src={shoppingCart}
              onClick={displayCart}
            />
            <div className={styles.cartcountcontainer}>
              <p className={styles.cartcounttext}>{cart.length}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
