import React from "react";
import styles from "../styles/cart.module.css";
import exit from "../assets/x.svg";
import CartProduct from "./CartProduct";

// component to display cart
const Cart = (props) => {
  const { cartActive, hideCart, cart, removeFromCart } = props;

  return (
    <div className={styles.cartcontainer} onMouseLeave={hideCart}>
      <div className={styles.cart}>
        <div className={styles.titlecontainer}>
          <p className={styles.carttext}>Cart</p>
          <img className={styles.exitbutton} src={exit} onClick={hideCart} />
        </div>
        <div className={styles.itemscontainer}>
          {cart.map((cartproduct, index) => {
            return (
              <CartProduct
                cartproduct={cartproduct}
                key={index}
                index={index}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </div>
        <div className={styles.totalcontainer}>
          <p className={styles.totaltext}>Total: ${cart.length * 45}</p>
        </div>
        <div className={styles.checkoutcontainer}>
          <a
            className={styles.checkouttext}
            href="https://www.crocs.com/"
            target="_blank"
          >
            <div className={styles.linkcontainer}>Checkout</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;