import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.PROD_URL,
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["User"],
});
