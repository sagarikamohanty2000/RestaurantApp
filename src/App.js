import React from "react";
import Header from "./Components/Layout/Header";
import RestaurantMealList from "./Components/Resturant/RestaurantMealList";
function App() {
  return (
    <React.Fragment>
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
