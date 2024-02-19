import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import RestaurantMealList from "./Components/Resturant/RestaurantMealList";
import CartCheckout from "./Components/Cart/CartCheckout";
import CartProvide from "./Store/CartProvider";

function App() {
  const [cartHandler, setCartHandler] = useState(false);

  const showCartHandler = (showCart) => {
    setCartHandler(showCart);
  };

  const hideCartHandler = (showCart) => {
    setCartHandler(showCart);
  };
  return (
    <CartProvide>
      {cartHandler && <CartCheckout onShowCart={hideCartHandler} />}
      <div>
        <Header onShowCart={showCartHandler} />
      </div>
      <main>
        <RestaurantMealList></RestaurantMealList>
      </main>
    </CartProvide>
  );
}

export default App;
