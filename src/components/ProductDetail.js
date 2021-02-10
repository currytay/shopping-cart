import React from "react";
import styles from "../styles/product.module.css";
import alertIcon from "../assets/alert-circle.svg";

// component to display product information
const ProductDetail = (props) => {
  const { activeProduct, addToCart, selectSize, errorMessage } = props;

  return (
    <>
      {errorMessage.show && (
        <div className={styles.errorcontainer}>
          <img src={alertIcon} alt="Alert icon" className={styles.alerticon} />
          <h3 className={styles.errortext}>Please select a size.</h3>
        </div>
      )}
      <div className={styles.detailcontainer}>
        <div className={styles.infocontainer}>
          <p className={styles.nametext}>Classic Clog</p>
          <p className={styles.colortext}>{activeProduct.color}</p>
          <p className={styles.descriptiontext}>
            Incredibly light and fun to wear. Water-friendly and buoyant; weighs
            only ounces. Ventilation ports add breathability and help shed water
            and debris. Easy to clean and quick to dry. Pivoting heel straps for
            a more secure fit. Customizable with Jibbitz™ charms.
          </p>
        </div>
        <div className={styles.imagecontainer}>
          <img className={styles.productimage} src={activeProduct.src} />
        </div>
        <div className={styles.actioncontainer}>
          <p className={styles.pricetext}>$45 USD</p>
          <select className={styles.sizepicker} onChange={selectSize}>
            <option value="" disabled selected>
              SELECT A SIZE
            </option>
            <option value="US 7 / EU 40">US 7 / EU 40</option>
            <option value="US 8 / EU 41">US 8 / EU 41</option>
            <option value="US 9 / EU 42">US 9 / EU 42</option>
            <option value="US 10 / EU 43">US 10 / EU 43</option>
            <option value="US 11 / EU 44">US 11 / EU 44</option>
            <option value="US 12 / EU 45">US 12 / EU 45</option>
            <option value="US 13 / EU 46">US 13 / EU 46</option>
          </select>
          <button className={styles.cartbutton} onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;