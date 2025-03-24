import { Link, Outlet } from "react-router"

const Navigation = () => {
    return (
        <>
            <nav>
                <Link to="/" >HOME</Link>
                <Link to="/aboutus" >About us</Link>
                <Link to="/sprookjes" >Sprookjes</Link>
                <Link to="/makingOf" >Making of</Link>
            </nav>

            <Outlet />
        </>

    )
}

export default Navigation