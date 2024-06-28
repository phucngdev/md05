import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  deleteFromCart,
  minusCount,
  plusCount,
} from "../../services/cart.service";

const cartSlice = createSlice({
  name: "myCart",
  initialState: {
    data: JSON.parse(localStorage.getItem("myCart")) || [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        state.data = state.data.map((p) => {
          return p._id === action.payload._id &&
            p.color._id === action.payload.color._id &&
            p.size._id === action.payload.size._id
            ? { ...p, count: p.count + action.payload.count }
            : p;
        });
        const itemExists = state.data.some(
          (p) =>
            p._id === action.payload._id &&
            p.color._id === action.payload.color._id &&
            p.size._id === action.payload.size._id
        );
        if (!itemExists) {
          state.data.push(action.payload);
        }
        localStorage.setItem("myCart", JSON.stringify(state.data));
      })
      .addCase(plusCount.fulfilled, (state, action) => {
        state.data = state.data.map((p) => {
          return p._id === action.payload._id &&
            p.color._id === action.payload.color._id &&
            p.size._id === action.payload.size._id
            ? { ...p, count: p.count + 1 }
            : p;
        });
        localStorage.setItem("myCart", JSON.stringify(state.data));
      })
      .addCase(minusCount.fulfilled, (state, action) => {
        state.data = state.data.map((p) => {
          return p._id === action.payload._id &&
            p.color._id === action.payload.color._id &&
            p.size._id === action.payload.size._id &&
            p.count > 1
            ? { ...p, count: p.count - 1 }
            : p;
        });
        localStorage.setItem("myCart", JSON.stringify(state.data));
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.data = state.data.filter((p) => {
          return (
            p._id !== action.payload._id &&
            p.color !== action.payload.color &&
            p.size !== action.payload.size
          );
        });
        localStorage.setItem("myCart", JSON.stringify(state.data));
      });
  },
});

export default cartSlice.reducer;
