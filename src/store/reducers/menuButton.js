import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clicked:false,
}

export const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        changeState :(state)=>{
            state.clicked= !state.clicked;
        }
    }
});

export const {changeState} = menuSlice.actions;
export const selectClicked = (state) => state.menu.clicked;
export default menuSlice.reducer;