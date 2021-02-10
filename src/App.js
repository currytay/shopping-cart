import React, { useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./components/Routes";
import crocsRed from "./assets/crocsRed.png";
import crocsPink from "./assets/crocsPink.png";
import crocsYellow from "./assets/crocsYellow.png";
import crocsGreen from "./assets/crocsGreen.png";
import crocsBlue from "./assets/crocsBlue.png";
import crocsPurple from "./assets/crocsPurple.png";

const App = () => {
  // create variable with product info
  let products = [
    {
      src: crocsRed,
      alt: "Red Crocs",
      color: "Flame",
      url: "/shop/classic-clogs-flame",
      id: 1,
    },
    {
      src: crocsPink,
      alt: "Pink Crocs",
      color: "Electric Pink",
      url: "/shop/classic-clogs-pink",
      id: 2,
    },
    {
      src: crocsYellow,
      alt: "Yellow Crocs",
      color: "Lemon",
      url: "/shop/classic-clogs-yellow",
      id: 3,
    },
    {
      src: crocsGreen,
      alt: "Green Crocs",
      color: "Deep Green",
      url: "/shop/classic-clogs-green",
      id: 4,
    },
    {
      src: crocsBlue,
      alt: "Blue Crocs",
      color: "Cobalt Blue",
      url: "/shop/classic-clogs-blue",
      id: 5,
    },
    {
      src: crocsPurple,
      alt: "Purple Crocs",
      color: "Neon Purple",
      url: "/shop/classic-clogs-purple",
      id: 6,
    },
  ];

  // create variable to track product user is viewing
  const [activeProduct, setActiveProduct] = useState("");

  // function to get active product on click
  const clickProduct = (event) => {
    let productID = event.target.id - 1;
    let productInfo = products[productID];
    setActiveProduct(productInfo);
  };

  // create variable to track size selected
  const [size, setSize] = useState(null);

  // function to get size selected by user
  const selectSize = (event) => {
    let newSize = event.target.value;
    setSize(newSize);
  };

  // create variables to track cart status
  const [cart, setCart] = useState([]);
  const [cartEmpty, setCartEmpty] = useState(true);

  // create variable to display error message if size not selected
  const [errorMessage, setErrorMessage] = useState({
    show: false,
  });

  // function to display error message
  const displayError = () => {
    if (!errorMessage.show) {
      setErrorMessage((prev) => ({ ...prev, show: true })); // show error
      setTimeout(() => {
        setErrorMessage((prev) => ({ ...prev, show: false })); // hide error
      }, 5000);
    }
  };

  // function to add to cart
  const addToCart = () => {
    if (size) {
      setCartEmpty(false); 
      let newCartItem = {
        src: activeProduct.src,
        alt: activeProduct.alt,
        color: activeProduct.color,
        size: size,
      };
      setCart([...cart, newCartItem]);
      setSize(null);
    } else {
      displayError();
    }
  };

  // create variable to track cart visibility
  const [cartActive, setCartActive] = useState(false);

  // function to display cart
  const displayCart = () => {
    setCartActive(true);
  };

  // function to hide cart
  const hideCart = () => {
    setCartActive(false);
  };

  // function to remove cart item
  const removeFromCart = (index) => {
    let currentCart = [...cart];
    currentCart.splice(index, 1);
    setCart(currentCart);
  };

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Routes
            products={products}
            clickProduct={clickProduct}
            activeProduct={activeProduct}
            addToCart={addToCart}
            selectSize={selectSize}
            cart={cart}
            displayCart={displayCart}
            cartActive={cartActive}
            errorMessage={errorMessage}
            hideCart={hideCart}
            removeFromCart={removeFromCart}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;