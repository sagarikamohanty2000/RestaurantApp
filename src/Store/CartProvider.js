import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  const totalAmount = (state.totalAmount) + (action.item.price * action.item.amount);

  if (action.type == "ADD") {
    console.log('Inside cartReducer', action.item, totalAmount);
  
    const getItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    );
  
    const getItem = state.items[getItemIndex];
    let updatedItems = [...state.items];
  
    if (getItem) {
  
        const updatedExistingItem = {
        ...getItem,
        amount: Number(getItem.amount) + Number(action.item.amount),
      };
  
      updatedItems[getItemIndex] = updatedExistingItem;
    } 
    
    else {
      updatedItems = state.items.concat(action.item);
    }

    console.log('updatedItems',updatedItems)

    return { items: updatedItems, totalAmount: totalAmount };
  }

  return defaultCartState;
};

const CartProvide = (props) => {
  const [cartState, dispatchCartItem] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    console.log('context', item);
    dispatchCartItem({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {};
  
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount ,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvide;
