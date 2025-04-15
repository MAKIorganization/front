import { Outlet } from "react-router"
import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"

function Layout(){
    return(
        <>
            <NavBar></NavBar>
            <Outlet />
            <Footer/>
        </>
    )
}
export default Layout