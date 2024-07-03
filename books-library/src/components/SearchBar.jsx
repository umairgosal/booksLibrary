import axios from "axios";
import { useState, useReducer, useEffect } from "react";
import Card from "./Card";
import { initialState, reducer } from "./Reducers";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../store/slices/bookSlice";

function SearchBar(){
    const [state, dispatch] = useReducer(reducer, initialState)
    const {items, loading, error} = state
    const [btnPress, setBtnPress] = useState(false)
    const [query, setQuery] = useState("")
    const [bookData, setBookData] = useState([])
    const key = "AIzaSyDTpcRPc-44RydvSTDu6Oh8lrSuw2vSE_Q"
    const saveQuery = (event) => {
        setQuery(event.target.value)
    }

    useEffect(()=>{
        if(btnPress === true){
        dispatch({type: 'progress'})

        const handleSearch = async () => {
            try{
                let res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}&maxResults=14`)
                setBookData(res.data.items)
                console.log("error given", res?.data?.items)
                dispatch({type: 'fetched', data: res.data})
            }
            catch(err) {
                dispatch({type: 'error', error: err.message})
            }
        }
        handleSearch()
        
        }
    }, [btnPress])


    return(
        <>
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
                <button className="btn btn-primary hover:border-b-sky-950" onClick={(e)=>{
                    e.preventDefault()
                    setBtnPress(!btnPress)
                }}>search</button>
            </form>
            <Card book={bookData}></Card>
        </>
    );
}

export default SearchBar
