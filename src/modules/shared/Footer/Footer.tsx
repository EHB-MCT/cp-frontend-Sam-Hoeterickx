import { Link } from "react-router"

//Route
import { HOME_ROUTE } from "../../App/Home/home.route"
import { MAKING_OF_ROUTE } from "../../App/components/Makingof/makingOf.route"
import { FAIRY_TALE_ROUTE } from "../../App/components/Fairytale/fairytale.route"
import { ALL_FAIRY_TALES_ROUTE } from "../../App/components/AllFairyTales/allFairyTales.route"

export const Footer = () => {
    return(
        <footer>
            <Link to={HOME_ROUTE.path}>Home</Link>
            <Link to={ALL_FAIRY_TALES_ROUTE.path}>Explorer</Link>
            <Link to={MAKING_OF_ROUTE.path}>Making Of</Link>
            <Link to={FAIRY_TALE_ROUTE.path}>Fairy Tale</Link>
        </footer>
    )
}