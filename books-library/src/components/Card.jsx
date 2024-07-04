import { useSelector, useDispatch } from "react-redux";
import  { useState } from "react";
import { addToRead } from "../store/slices/bookSlice";
import ToRead from "./ToRead";

const Card = ({book}) => {

  // const booksToRead = useSelector((state)=>{state.book.value})
  const dispatch = useDispatch()
  const bookValue = useSelector((state)=>{state.book.value})
  const [newBook, setNewBook] = useState("")
  //   const addBook = () => {
  //   if(newBook.trim() !== ""){
  //     setToReadBooks(t => [...t, newBook])
  //     setNewBook("")
  //   }
  // }
  const handleClick = (items) => {
    dispatch(addToRead(items))
  }
    return(
      <>
      
      {
        book?.map((items)=>{
          return(
          
            <div key={items.id} className="card bg-base-100 w-96 shadow-xl">
              <figure>
              <img
                src={items.volumeInfo.imageLinks.thumbnail} // book image
                alt="img" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {items.volumeInfo.title.substring(0, 30)} {/* book title */}
              </h2>
            </div>
            <button className="btn btn-primary hover:border-b-sky-950 w-24 m-1 p-1" onClick={()=>handleClick(items)}>Add to Read</button>

            </div>
          
          )
        })
      }
      </>
    )
}


export default Card