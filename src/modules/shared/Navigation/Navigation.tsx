import { NavLink } from "react-router"
import clsx from "clsx"

//Routes
import { ABOUT_US_ROUTE } from "../../App/components/AboutUs/about.route"
import { ALL_FAIRY_TALES_ROUTE } from "../../App/components/AllFairyTales/allFairyTales.route"
import { FAIRY_TALE_ROUTE } from "../../App/components/Fairytale/fairytale.route"
import { MAKING_OF_ROUTE } from "../../App/components/Makingof/makingOf.route"

//Components
import { SearchBar } from "../SearchBar"

//CSS
import styles from "./navigation.module.scss"

export const Navigation = () => {
    return (
        <div className="outer-wrapper">
            <nav className={clsx(styles["navigation"])}>
                <img className={clsx(styles['navigation--logo'])} src="Logo_cp_front-end.svg" alt="Logo" />
                <div className={clsx(styles["navigation--links"])}>
                <NavLink to={ALL_FAIRY_TALES_ROUTE.path}>Explore</NavLink>
                    <NavLink to={ABOUT_US_ROUTE.path}>About</NavLink>
                    <NavLink to="/making-of/2">Making Of</NavLink>
                    {/* <NavLink to={FAIRY_TALE_ROUTE.path}>Fairytale</NavLink> */}
                    <SearchBar />
                </div>
            </nav>
        </div>
        
    )
}