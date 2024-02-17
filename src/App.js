import React ,{useState}from "react";
import Header from "./Components/Layout/Header";
import RestaurantMealList from "./Components/Resturant/RestaurantMealList";
import CartCheckout from "./Components/Cart/CartCheckout";
function App() {

  const [cartHandler, setCartHandler] = useState(false);

  const showCartHandler = (showCart) => {
      setCartHandler(showCart);
  }

  const hideCartHandler = (showCart) => {
      setCartHandler(showCart);
  }
  return (
    <React.Fragment>
      { cartHandler && <CartCheckout onShowCart={hideCartHandler}/>}
      <div>
        <Header  onShowCart={showCartHandler}/>
      </div>
      <main>
        <RestaurantMealList></RestaurantMealList>
      </main>
    </React.Fragment>
  );
}

export default App;
