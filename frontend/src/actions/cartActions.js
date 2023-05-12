import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstant";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  let data = await fetch(`http://localhost:8080/api/products/${id}`);
  data = await data.json();
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
