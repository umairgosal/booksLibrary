import booksVideo from '../assets/booksLibrary.mp4'

function Video(){

    return(
        <>
        <video loop={true} autoPlay={true} playsInline="" muted="muted" src={booksVideo} ></video>
        </>
    );
}

export default Video