import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface itemsType {
  theme: boolean;
  type: string;
  front: number;
  back: number;
  size: string;
  price: number[];
}

const itemsState: itemsType = {
  theme: false,
  type: 'common',
  front: 0,
  back: 0,
  size: 's',
  price: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState: itemsState,
  reducers: {
    themeSet(state, action: PayloadAction<boolean>) {
      state.theme = action.payload;
    },
    typeSet(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
    sizeSet(state, action: PayloadAction<string>) {
      state.size = action.payload;
    },
    frontSet(state, action: PayloadAction<number>) {
      state.front = action.payload;
    },
    backSet(state, action: PayloadAction<number>) {
      state.back = action.payload;
    },
    priceSet(state, action: PayloadAction<number[]>) {
      state.price = action.payload;
    },
  },
});

export const moodSelect = (state: RootState) => state.itemsSlice.theme;
export const typeSelect = (state: RootState) => state.itemsSlice.type;
export const sizeSelect = (state: RootState) => state.itemsSlice.size;
export const frontSelect = (state: RootState) => state.itemsSlice.front;
export const backSelect = (state: RootState) => state.itemsSlice.back;
export const priceSelect = (state: RootState) => state.itemsSlice.price;

export const { themeSet, typeSet, sizeSet, frontSet, backSet, priceSet } = itemsSlice.actions;
export default itemsSlice.reducer;
