import React from "react";
import styles from "../styles/shop.module.css";
import { Link } from "react-router-dom";

// component to display products on the product page
const Products = (props) => {
  const {
    product: { src, alt, color, url, id },
    clickProduct,
  } = props;

  return (
    <>
      <Link to={url} className={styles.link}>
        <div className={styles.productentry} onClick={clickProduct} id={id}>
          <img className={styles.productimage} src={src} alt={alt} id={id} />
          <p className={styles.productcolortext} id={id}>
            {color}
          </p>
        </div>
      </Link>
    </>
  );
};

export default Products;
