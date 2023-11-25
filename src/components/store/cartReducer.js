import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: "product",
  initialState: {
    data: [],
    cart: [],
    isLoading: true,
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    add(state, action) {
      const item = state.data.filter((e) => e.id === action.payload);
      console.log(item);
      state.cart.push(item[0]);
    },
    remove(state, action) {
      state.cart = state.cart.filter((e) => e.id !== action.payload);
    },
  },
});

export const { setData, setIsLoading, add, remove } = cartReducer.actions;
export default cartReducer.reducer;
