import React from "react";
import Header from "./Components/Layout/Header";
import RestaurantMealList from "./Components/Resturant/RestaurantMealList";
import CartCheckout from "./Components/Cart/CartCheckout";
function App() {
  return (
    <React.Fragment>
      <CartCheckout></CartCheckout>
      <div>
        <Header />
      </div>
      <main>
        <RestaurantMealList></RestaurantMealList>
      </main>
    </React.Fragment>
  );
}

export default App;
