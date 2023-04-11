import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000',
  }),
  tagTypes: ['books'],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (options) => {
        const { searchTerm, filterTerm } = options;
        if (searchTerm) {
          return `/books?q=${searchTerm}`;
        } else if (filterTerm === 'featured') {
          return `/books?featured=${true}`;
        } else if (filterTerm === 'all') {
          return '/books';
        } else {
          return '/books';
        }
      },

      providesTags: ['books'],
    }),

    addBook: builder.mutation({
      query: (data) => ({
        url: '/books',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),

    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['books'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useEditBookMutation,
} = apiSlice;
