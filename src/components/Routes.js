import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ProductPage from "../pages/ProductPage";
import ShopPage from "../pages/ShopPage";

// component to handle routing between pages
const Routes = (props) => {
  const {
    products,
    clickProduct,
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
    <>
      {/* Landing page */}
      <Route
        exact
        path="/"
        render={(props) => (
          <LandingPage
            {...props}
            cart={cart}
            displayCart={displayCart}
            cartActive={cartActive}
            hideCart={hideCart}
            removeFromCart={removeFromCart}
          />
        )}
      />
      {/* Shop page */}
      <Route
        exact
        path="/shop"
        render={(props) => (
          <ShopPage
            {...props}
            products={products}
            clickProduct={clickProduct}
            cart={cart}
            displayCart={displayCart}
            cartActive={cartActive}
            hideCart={hideCart}
            removeFromCart={removeFromCart}
          />
        )}
      />
      {/* Product page */}
      <Route
        exact
        path="/shop/:id"
        render={(props) => (
          <ProductPage
            {...props}
            products={products}
            activeProduct={activeProduct}
            addToCart={addToCart}
            selectSize={selectSize}
            cart={cart}
            displayCart={displayCart}
            cartActive={cartActive}
            hideCart={hideCart}
            errorMessage={errorMessage}
            removeFromCart={removeFromCart}
          />
        )}
      />
    </>
  );
};

export default Routes;
