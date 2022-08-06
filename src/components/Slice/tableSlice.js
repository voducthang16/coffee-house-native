import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: '',
};

const TableSlice = createSlice({
    name: 'Table',
    initialState,
    reducers: {
        setState: (state, action) => {
            console.log(`status: ${action.payload}`);
            state.status = action.payload;
            console.log(`current status: ${state.status}`);
        },
    },
});
const { reducer, actions } = TableSlice;
export const { setState } = actions;
export default reducer;
