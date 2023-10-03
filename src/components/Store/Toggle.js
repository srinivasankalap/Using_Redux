import { createSlice } from "@reduxjs/toolkit";

const Toggle=createSlice({
    name: 'toggle',
    initialState: {isShowing: false , notification: null},
    reducers:{
        toggle(state){
            state.isShowing=!state.isShowing;
        },
        showNotification(state, action){
            state.notification={status: action.payload.status, title: action.payload.title, message: action.payload.message, }
        }
    }
})

export const toggleAction=Toggle.actions;
export default Toggle;