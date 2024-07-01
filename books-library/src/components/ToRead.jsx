import { useState } from "react";


function ToRead(){
  const [isBookRead, setIsBookRead] = useState(false)
  const handleClick =()=>{
    setIsBookRead(!isBookRead)
  }
  const addBook = ()=>{

  }
  const removeBook = ()=>{

  } 
    return(
      <>
      {isBookRead}
        <ul className="menu bg-base-200 rounded-box shadow-md w-auto m-3">
            <li>
              <h2 className="menu-title">Books to read</h2>
              <ul className="w-96">
                <li className="grid grid-flow-col"><a>Manufacturing Consent</a>
                  {/* <button className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Add Book</button> */}
                  <button onClick={handleClick} className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Remove Book</button>
                </li>
                <li className="grid grid-flow-col"><a>Intelligent Investor</a>            
                  {/* <button className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Add Book</button> */}
                  <button onClick={handleClick} className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Remove Book</button>
                </li>
                <li className="grid grid-flow-col"><a>The Reconstitution of Islamic Thoughts</a>            
                  {/* <button className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Add Book</button> */}
                  <button onClick={handleClick} className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Remove Book</button>
                </li>
                <li className="grid grid-flow-col"><a>41 Rules of Power</a>             
                  {/* <button className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Add Book</button> */}
                  <button onClick={handleClick} className="btn btn-primary hover:border-b-sky-950 w-24 m-1">Remove Book</button>
                </li>
              </ul>
            </li>
        </ul>
        </>
    );
}

export default ToRead