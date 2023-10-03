import { configureStore } from "@reduxjs/toolkit";
import Toggle from "./Toggle";

const store=configureStore({
    reducer: Toggle
})

export default store;
