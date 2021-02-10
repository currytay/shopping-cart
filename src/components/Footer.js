import React from "react";
import styles from "../styles/headerfooter.module.css";

// component to display footer
const Footer = () => {
  return (
    <div className={styles.footercontainer}>
      <div className={styles.footerleft}>
        <a
          className={styles.footertext}
          href="https://twitter.com/Crocs"
          target="_blank"
        >
          @CROCS
        </a>
      </div>
      <div className={styles.footerright}>
        <p className={styles.footertext}>COME AS YOU ARE</p>
      </div>
    </div>
  );
};

export default Footer;
