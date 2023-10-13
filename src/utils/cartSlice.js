import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: []
    },
    reducers: {
        addItem:
        //Reducer Function: it got access to the initial state to modify
        (state,action)=>{
            //Mutating the states here
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            // state = [""]; We can't do this because it is just changing the reference not mutating the object. It will have a value of initail state
            // RTK - says either mutate the existing state or return a new state
            state.items.length=0;
            // return {items:[]} now this will replace the inside of original state = []
        }
    }
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;