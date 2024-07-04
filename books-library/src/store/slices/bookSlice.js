import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
                

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        addToReadItems:[],
    },
 
//  working on this feature as of latest.................................................................get to it first
    reducers: {
        addToRead: (state, action) => {
            state.addToReadItems = [...state.addToReadItems, action.payload]
        },
        removeBook: (state, action) => {
            state.addToReadItems = state.addToReadItems.filter(items => items.id !== action.payload);
        },
        // addBook: (state, action) => {
        //     const toReadBook = {
        //         id: Math.floor(Math.random()*1000),
        //         title: action.payload.title,
        //     }
        //     return {...state, book: toReadBook}
        //     // state.book += action.payload
        //     // [...book, newBook]
        // },
        // removeBook:(state, action) => {
        //     return state.addToReadItems.filter(items => items.id !== action?.payload)
        // },
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

export const {removeBook, addToRead} = bookSlice.actions
export default bookSlice.reducer




// // Redux

// const initialState ={}

// const reducer = function(state, action){}

// useReducer(reducer, initialState)