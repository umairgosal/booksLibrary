
import react, { useState } from "react";

const Card = ({book}) => {

  const [newBook, setNewBook] = useState([])
    const addBook = () => {
    if(newBook.trim() !== ""){
      setToReadBooks(t => [...t, newBook])
      setNewBook("")
    }
  }

  const dummyData = [book]
  // console.log("state", book)
    return(
      <>
      {/* {book} */}
      {
        book?.map((items)=>{
          return(
            <>
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
            <button className="btn btn-primary hover:border-b-sky-950 w-24 m-1 p-1" onClick={addBook}>Add to Read</button>
            </div>
            </>
          )
        })
      }
      </>
    )
}


export default Card