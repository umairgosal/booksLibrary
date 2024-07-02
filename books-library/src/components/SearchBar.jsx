import axios from "axios";
import { useState, useReducer } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../store/slices/bookSlice";

function SearchBar(){
    const [query, setQuery] = useState("")
    const key = "AIzaSyDTpcRPc-44RydvSTDu6Oh8lrSuw2vSE_Q"

    const saveQuery = (event) => {
        setQuery(event.target.value)
    }
    const initialState = {
        data: [],
    }
    const reducer = async (state, action) => {
        if(action.type === 'fetchData'){
                const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${action.payload}&key=${key}`)
                console.log(res.data)
                return [...state, action.data]
        throw Error('unknown error')
    }
}
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch({type: 'fetchData',
                  payload: query,
        })
     }


    return(
        <form className="flex items-center bg-white border border-gray-200 rounded-2xl m-5 mb-10 shadow-md dark:bg-black dark:border-gray-700">
            <label className="input input-bordered flex items-center gap-96 m-4">
                <input type="text" className="grow" placeholder="Enter the book name" onChange={saveQuery}/>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
            </label>
            <button className="btn btn-primary hover:border-b-sky-950" onClick={handleSearch}>search</button>
        </form>
    );
}

export default SearchBar
