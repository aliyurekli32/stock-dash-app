import { configureStore } from '@reduxjs/toolkit';
import  stockReducer  from './stock-slice';
import uiReducer from './ui-slice';

const store = configureStore({
    reducer: {
        stock: stockReducer,
        ui: uiReducer
    }
})
export default store;