import axios from "axios";


function TestingAxios(){
    const fetchData = async () => {
        try {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=flower&key=AIzaSyDTpcRPc-44RydvSTDu6Oh8lrSuw2vSE_Q`)
        console.log("hello")
        console.log(res.data)

    } catch (error){
        console.error(error);
    }
    }
    return(
        <>
        <p>{fetchData()}</p>
        </>
    );
}

export default TestingAxios