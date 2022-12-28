import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { open: false},
    reducers: {
        toggleOpen(state){
            state.open = !state.open
        }
    }
})

export const uiActions=uiSlice.actions;
export default uiSlice.reducer;
