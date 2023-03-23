import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CommunityProps } from 'src/hooks/useCommunityData';

const SERVER_URL = 'http://localhost:3000/'

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: `${SERVER_URL}` }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<CommunityProps[], void>({
      query: () => 'community',
    }),
  }),
})

export const { useGetUsersQuery } = usersApi;


export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: `${SERVER_URL}` }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query<CommunityProps, string>({
      query: (id) => ({ url: `community/${id}` }),
    }),
  }),
})

export const { useGetUserQuery } = userApi;