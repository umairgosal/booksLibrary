import booksVideo from '../assets/booksLibrary.mp4'

function Video(){

    return(
        <div className="flex flex-col h-screen justify-between mb-20">
            {/* <h1>umair gosal</h1> */}
        <video loop={true} autoPlay={true} playsInline="" muted="muted" src={booksVideo} ></video>
        </div>
    );
}

export default Video