import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./features/productSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import { TrlSlice } from "./features/trlSlice";
import { ConfigSlice } from "./features/configurationSlice";


const rootReducer = combineReducers ({
       product: ProductSlice.reducer,
       trl: TrlSlice.reducer,
       config: ConfigSlice.reducer
})
export const store = configureStore({
       reducer: rootReducer      
})


export const useAppDispatch:()=> typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>= useSelector;