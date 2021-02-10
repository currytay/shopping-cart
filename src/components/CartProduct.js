import React from "react";
import styles from "../styles/cart.module.css";

// component to display cart items
const CartProduct = (props) => {
  const {
    cartproduct: { src, alt, color, size },
    index,
    removeFromCart,
  } = props;

  return (
    <div className={styles.itemdetailcontainer}>
      <div className={styles.imagecontainer}>
        <img src={src} className={styles.detailimage} />
      </div>
      <div className={styles.itemtextcontainer}>
        <p className={styles.itemnametext}>Classic Clog</p>
        <p className={styles.itemdetailtext}>{color}</p>
        <p className={styles.itemdetailtext}>{size}</p>
        <p className={styles.itemdetailtext}>$45</p>
      </div>
      <div className={styles.removecontainer}>
        <p className={styles.removetext} onClick={(e) => removeFromCart(index)}>
          Remove
        </p>
      </div>
    </div>
  );
};

export default CartProduct;