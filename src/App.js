import React from 'react';
import Header from './Components/Layout/Header';
import RestaurantList from './Components/Resturant/RestaurantList';
function App() {

  return (
    <React.Fragment>
    <div>
    <Header />
    </div>
    <main>
    <RestaurantList></RestaurantList>
    </main>
    </React.Fragment>
  )
}

export default App;