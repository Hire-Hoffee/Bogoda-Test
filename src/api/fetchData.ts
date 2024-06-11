import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PostType } from "@/types";

export const postsApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/posts" }),
  endpoints: (builder) => ({
    getPost: builder.query<PostType, number>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useLazyGetPostQuery } = postsApi;
