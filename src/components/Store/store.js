import { configureStore } from '@reduxjs/toolkit';
import tableSlice from '../Slice/tableSlice';
const store = configureStore({
    reducer: {
        table: tableSlice,
    },
});

export default store;
