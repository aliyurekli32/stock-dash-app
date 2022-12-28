import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name:"stock",
    initialState: {
        firms: [],
        brands: [],
        categories: [],
        products: [],
        transactions:[],
        stockData:[],
        totalProfit: {},
        saleTransaction: [],
        purchaseTransaction: [],
        
    },
    reducers:{
        getFirms(state,action){
            state.firms = action.payload;
        },
        getProducts(state,action){
            state.products = action.payload;
        },
        getBrands(state,action){
            state.brands = action.payload;
        },
        getCategories(state,action){
            state.category = action.payload;
        },
        getAllTransactions(state, action){
            const { sales, purchases} = action.payload;
            state.stockData = [...sales, purchases]
            const saleCount = sales.map(item=> Number.parseFloat(item.price_total))
            const purchaseCount = purchases.map(item=> Number.parseFloat(item.price_total))
            const profitSale = saleCount.reduce((a,b)=> a + b, 0);
            const profitPurchase = purchaseCount.reduce((a,b)=> a + b, 0);
            const profitTotal= profitSale-profitPurchase;
            state.transactions = sales;
            state.totalProfit ={profitPurchase, profitSale, profitTotal}

        }
    }
})
export const stockActions = stockSlice.actions;
export default stockSlice.reducer;