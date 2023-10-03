import { configureStore } from "@reduxjs/toolkit";
import Toggle from "./Toggle";
import cartSlice from "./cartSlice";

const store=configureStore({
    reducer: { toggle: Toggle.reducer, cart: cartSlice.reducer}
})

export default store;
