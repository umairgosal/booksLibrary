import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Video from "./Video"

function OutletPaths(){

    return(
        <>
        <Header></Header>
        <main className="mb-auto">
        <Outlet/>
        </main>
        <Footer></Footer>
        </>
    )
}

export default OutletPaths