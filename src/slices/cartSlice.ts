import { createSlice, createSelector } from '@reduxjs/toolkit';
import { CardProps } from '../App';

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        addItem: (state: Array<CardProps>, action) => {
            const item: CardProps = action.payload;
            state.push(item);
        },
        removeItem: (state: Array<CardProps>, action) => {
            const indexToRemove = state.findIndex(
                (item) => item.id === action.payload.id
            );

            return [...state.slice(0, indexToRemove), ...state.slice(indexToRemove + 1)];
        },
    },
});

export const itemSelector = createSelector(
    (state) => state.cart,
    (state) => state
);

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
