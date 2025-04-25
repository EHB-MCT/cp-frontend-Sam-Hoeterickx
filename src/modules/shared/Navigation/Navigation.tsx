import { NavLink } from "react-router"

//Routes
import { ABOUT_US_ROUTE } from "../../App/components/AboutUs/about.route"
import { ALL_FAIRY_TALES_ROUTE } from "../../App/components/AllFairyTales/allFairyTales.route"
import { FAIRY_TALE_ROUTE } from "../../App/components/Fairytale/fairytale.route"
import { MAKING_OF_ROUTE } from "../../App/components/Makingof/makingOf.route"

//Components
import { SearchBar } from "../SearchBar"


export const Navigation = () => {
    return (
        <nav>
            <NavLink to={ABOUT_US_ROUTE.path}>About</NavLink>
            <NavLink to={MAKING_OF_ROUTE.path}>Making Of</NavLink>
            <NavLink to={ALL_FAIRY_TALES_ROUTE.path}>Explore</NavLink>
            <NavLink to={FAIRY_TALE_ROUTE.path}>Fairytale</NavLink>
            <SearchBar />
        </nav>
    )
}