import { NavLink } from "react-router"
import { HOME_ROUTE } from "../../App/Home/home.route"
import { MAKING_OF_ROUTE } from "../../App/components/Makingof/makingOf.route"
import { ALL_FAIRY_TALES_ROUTE } from "../../App/components/AllFairyTales/allFairyTales.route"
import { FAIRY_TALE_ROUTE } from "../../App/components/Fairytale/fairytale.route"

export const Navigation = () => {
    return (
        <nav>
            <NavLink to={HOME_ROUTE.path}>Home</NavLink>
            <NavLink to={MAKING_OF_ROUTE.path}>Making Of</NavLink>
            <NavLink to={ALL_FAIRY_TALES_ROUTE.path}>Explore</NavLink>
            <NavLink to={FAIRY_TALE_ROUTE.path}>Fairytale</NavLink>
        </nav>
    )
}