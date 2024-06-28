import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseUrl from "../apis/axios";
import { message } from "antd";

export const login = createAsyncThunk("login", async (data) => {
  try {
    const response = await BaseUrl.post(`auth/login`, data);
    return response;
  } catch (error) {
    message.error("Lỗi đăng nhập");
  }
});
