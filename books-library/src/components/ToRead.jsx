import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBook } from "../store/slices/bookSlice";



function ToRead(){
  // const [newBook, setNewBook] = useState("")
  // const [toReadBooks, setToReadBooks] = useState(["one", "two", "three"])

  const toReadBooks = useSelector((state)=>state?.book?.addToReadItems);
  console.log("To Read",toReadBooks)
  const dispatch = useDispatch()


  // const handleClick = (event) => {
  //   setNewBook(event.target.value)
  // }
  const handleRemove = (items) => {
    console.log("hello", items)

    dispatch(removeBook(items?.id))
  }
  // const removeBook = (index)=>{
  //   const updateBooks = toReadBooks.filter((_, i) => i !== index) 
  //   setToReadBooks(updateBooks)
  // } 
    return(
        <ul className="menu bg-base-200 rounded-box shadow-md w-auto m-3">
            <li>
              <h2 className="menu-title">Books to read</h2>
              <ul className="w-96">
              {toReadBooks?.map((items)=>
                  <li className="grid grid-flow-col" key={items.id}><a>{items?.volumeInfo?.title}</a>
                    {/* <button className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Add Book</button> */}
                    <button onClick={()=>handleRemove(items)} className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Remove Book</button>
                  </li>


              )}
              </ul>
            </li>
        </ul>
    );
}

export default ToRead


// /*                   <li className="grid grid-flow-col"><a>Intelligent Investor</a>            
// /*                   {/* <button className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Add Book</button> */}
//                     <button onClick={removeBook} className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Remove Book</button>
// /*                  </li>
//                   <li className="grid grid-flow-col"><a>The Reconstitution of Islamic Thoughts</a>            
//                     {/* <button className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Add Book</button> */}
//                     <button onClick={removeBook} className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Remove Book</button>
// /*                  </li> */
// /*                  <li className="grid grid-flow-col"><a>41 Rules of Power</a>             
//                     {/* <button className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Add Book</button> */}
//                     <button onClick={removeBook} className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Remove Book</button>
//                   </li> */