import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../slices/cartSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
    devTools: true,
});

export default store;
