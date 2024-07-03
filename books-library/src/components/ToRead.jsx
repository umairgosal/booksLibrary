import { useState } from "react";
import {nwBook} from "./Card"


function ToRead(){
  const [newBook, setNewBook] = useState("")
  const [toReadBooks, setToReadBooks] = useState(["one", "two", "three"])


  const handleClick = (event) => {
    setNewBook(event.target.value)
  }

  const removeBook = (index)=>{
    const updateBooks = toReadBooks.filter((_, i) => i !== index) 
    setToReadBooks(updateBooks)
  } 
console.log(toReadBooks)
    return(
      <>
      {/* {isBookRead} */}
        <ul className="menu bg-base-200 rounded-box shadow-md w-auto m-3">
            <li>
              <h2 className="menu-title">Books to read</h2>
              {toReadBooks.map((book, index)=> 
                <ul className="w-96">
                  <li className="grid grid-flow-col" key={index}><a>{book}</a>
                    {/* <button className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Add Book</button> */}
                    <button onClick={()=>removeBook(index)} className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Remove Book</button>
                  </li>

                </ul>
              )}
            </li>
        </ul>
        </>
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