import { Link } from "react-router"

//Route
import { ABOUT_US_ROUTE } from "../../App/components/AboutUs/about.route"

export const Footer = () => {
    return(
        <footer>
            <img src="./" alt="Logo" />
            <p>23 studenten van de opleiding MCT die kozen ...</p>
            <Link to={ABOUT_US_ROUTE.path}>About us</Link>
        </footer>
    )
}