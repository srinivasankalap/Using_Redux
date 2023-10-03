import { createSlice } from "@reduxjs/toolkit";

const Toggle=createSlice({
    name: 'toggle',
    initialState: {isShowing: false},
    reducers:{
        toggle(state){
            state.isShowing=!state.isShowing;
        }
    }
})

export const toggleAction=Toggle.actions;
export default Toggle;