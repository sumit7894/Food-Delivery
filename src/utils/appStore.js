import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    //it contains the Reducers from all the slice. Right now we have only one slice
    reducer: {
        cart: cartReducer
    },
});

export default appStore;