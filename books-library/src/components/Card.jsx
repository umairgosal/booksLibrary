import { useSelector, useDispatch } from "react-redux";
import  { useState } from "react";
import { addToRead } from "../store/slices/bookSlice";
import ToRead from "./ToRead";
import { Modal } from "antd";
import {Link} from "react-router-dom";

const Card = ({book}) => {

  // const booksToRead = useSelector((state)=>{state.book.value})
  const dispatch = useDispatch()
  const bookValue = useSelector((state)=>{state.book.value})
  const [newBook, setNewBook] = useState([])
  const [modal, setModal] = useState(false)
  //   const addBook = () => {
  //   if(newBook.trim() !== ""){
  //     setToReadBooks(t => [...t, newBook])
  //     setNewBook("")
  //   }
  // }
  const handleClick = (items) => {
        dispatch(addToRead(items))
  }
  const showBookOverview = (itemss)=>{
    setNewBook(itemss)
    setModal(true)
    // console.log("modal Status 1", itemss)
  }
  const handleOk = ()=>{
    setModal(false)
    // console.log("modal Status 2", modal)
  }
  const handleCancel = ()=> {
    setModal(false)
    // console.log("modal Status 3", modal)
  }

    return(
      <>
        <div className="grid grid-cols-7"  >
        {
          book?.map((items)=>{
            return(
                <div key={items.id} className="card bg-base-100 w-96 shadow-xl hover:cursor-pointer hover:bg-gray-950" >
                  <figure>
                  <img
                    onClick={()=>showBookOverview(items)}
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
        </div>
        {modal && 
        // book?.map((itemss)=>{
          // return(
            <Modal title={newBook?.volumeInfo?.title?.substring(0,30)} open={modal} onOk={handleOk} onCancel={handleCancel}>
              <div>
                <div className='overlay'></div>
                <div className='modal-content'>
                  <p>{newBook?.searchInfo?.textSnippet}</p>
                  <Link target="_blank" to={newBook?.volumeInfo?.previewLink}><button className="btn-primary text-zinc-100" >preview</button></Link>
                </div>
              </div>
            </Modal>
          // )
        // })
        }
      </>
    )
}


export default Card