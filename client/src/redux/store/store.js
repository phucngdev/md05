import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../useSlice/productSlice";
import cartSlice from "../useSlice/cartSlice";
import orderSlice from "../useSlice/orderSlice";
import statisticSlice from "../useSlice/statisticSlice";
import authSlice from "../useSlice/authSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    auth: authSlice,
    myCart: cartSlice,
    order: orderSlice,
    statistics: statisticSlice,
  },
});
export default store;
