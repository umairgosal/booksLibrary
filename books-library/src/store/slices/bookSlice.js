import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        book: [],
    },
 
 
//  working on this feature as of latest.................................................................get to it first
    reducers: {
        addBook: (state, action) => {
            state.book = [...book, newBook])
        },
    //     (action, state) => {
    //         state.isLoading = false
    //         data = action.payload
    //     }
    //    (action, state) => {
    //         console.log('Error', action.payload)
    //         state.isError = true
    //     }
    },
})

export const {addBook} = bookSlice.actions
export default bookSlice.reducer




// // Redux

// const initialState ={}

// const reducer = function(state, action){}

// useReducer(reducer, initialState)