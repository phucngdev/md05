import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from "../apis/axios";

export const createOrder = createAsyncThunk("create/order", async (data) => {
  try {
    const response = await BaseUrl.post(`order`, data);
    return response.data;
  } catch (error) {
    message.error("Lỗi server");
  }
});

export const getOneOrder = createAsyncThunk("getOne/order", async (id) => {
  try {
    const response = await BaseUrl.get(`order/${id}`);
    return response.data;
  } catch (error) {
    message.error("Lỗi server");
  }
});
