import {configureStore} from '@reduxjs/toolkit'
import cardSlice from './slices/bookSlice'

export default configureStore({
    reducer: {
        card: cardSlice,
    },
});