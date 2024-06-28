import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from "../apis/axios";
import { message } from "antd";

export const getOneProduct = createAsyncThunk("getOne/product", async (id) => {
  try {
    const response = await BaseUrl.get(`product/${id.id}`);
    return response.data;
  } catch (error) {
    message.error("Lỗi server");
  }
});

export const getAllProduct = createAsyncThunk("getAll/product", async () => {
  try {
    const response = await BaseUrl.get("product/");
    return response.data;
  } catch (error) {
    message.error("Lỗi server");
  }
});

export const updateProduct = createAsyncThunk(
  "put/product",
  async ({ id, data }) => {
    try {
      const response = await BaseUrl.put(`product/${id}`, data);
      return response.data;
    } catch (error) {
      message.error("Lỗi server");
    }
  }
);

export const deleteProduct = createAsyncThunk("delete/product", async (id) => {
  try {
    const response = await BaseUrl.delete(`product/${id}`);
    return response.data;
  } catch (error) {
    message.error("Lỗi server");
  }
});
