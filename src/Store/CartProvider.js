import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const getItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const getItem = state.items[getItemIndex];
    let updatedItems = [...state.items];

    if (getItem) {
      const updatedExistingItem = {
        ...getItem,
        amount: Number(getItem.amount) + Number(action.item.amount),
      };

      updatedItems[getItemIndex] = updatedExistingItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: totalAmount };
  }

  if (action.type === "REMOVE") {
    const getItemIndex = state.items.findIndex((item) => item.id === action.id);
    const getItem = state.items[getItemIndex];
    let updatedItems = [];
    if (getItem.amount == 1) {
      updatedItems = state.items.filter((item) => item.id !== getItem.id);
    } else {
      const updateItem = { ...getItem, amount: getItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[getItemIndex] = updateItem;
    }

    const updateTotalAmount = state.totalAmount - getItem.price;

    return { items: updatedItems, totalAmount: updateTotalAmount };
  }

  return defaultCartState;
};

const CartProvide = (props) => {
  const [cartState, dispatchCartItem] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartItem({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartItem({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
