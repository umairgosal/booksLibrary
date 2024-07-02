import ToRead from "./ToRead";


function Card(props){

    const addBook = () => {
    if(newBook.trim() !== ""){
      setToReadBooks(t => [...t, newBook])
      setNewBook("")
    }
  }

    return(
       <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={props.state.imageLinks} // book image
                alt="img" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {props.state.title} {/* book title */}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{props.state.categories}</p>
              <div className="card-actions justify-end">  
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
              <button className="btn btn-primary hover:border-b-sky-950 w-24 m-1 p-1" >Add to Read</button>
            </div>
        </div>
    );
}


export default Card