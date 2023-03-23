import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import { usersApi, userApi } from './services/users'

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersApi.middleware, userApi.middleware),
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>