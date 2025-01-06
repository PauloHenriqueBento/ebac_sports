import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducer/Carrinho'
import favoritoReducer from './reducer/Favorito'

export type RootReducer = ReturnType<typeof store.getState>

import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})
