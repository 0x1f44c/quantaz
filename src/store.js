import { configureStore } from '@reduxjs/toolkit';

import keysReducer from './slices/keysSlice';

export default configureStore({
    reducer: {
        keys: keysReducer
    }
})
