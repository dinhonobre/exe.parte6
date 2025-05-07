import { configureStore } from '@reduxjs/toolkit';
import carrinhoReducer from './carrinhoSlice';

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
  },
});

// Tipagens para facilitar o uso do dispatch e do estado nos componentes
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;