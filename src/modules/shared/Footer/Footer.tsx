import { NavLink } from "react-router"
import clsx from "clsx"

//Route
import { ABOUT_US_ROUTE } from "~app/components/AboutUs/about.route";
import { ALL_FAIRY_TALES_ROUTE } from "~app/components/AllFairyTales/allFairyTales.route";

//Css
import styles from './footer.module.scss';

export const Footer = () => {
    return(
        <footer className={clsx(styles["footer"])}>
            <div className="outer-wrapper">
                <div className={clsx(styles["footer--inner-wrapper"])}>
                    <NavLink to={ALL_FAIRY_TALES_ROUTE.path} >
                        <img className={clsx(styles["footer--inner-wrapper--logo"])} src="./Logo_cp_front-end.svg" alt="Logo" />
                    </NavLink>
                    <div className={clsx(styles["footer--inner-wrapper--info"])}>
                        <p style={{display: "inline-block", marginBottom: "24px", maxWidth: "60%"}}>23 studenten van de opleiding MCT die kozen voor het vak Front-End Design. Met een dosis creativiteit, code en een flinke scheut verbeelding verzamelden ze hier al hun sprookjes. Benieuwd wie wij zijn?</p>
                        <div className="button-wrapper">
                            <NavLink className="button" to={ABOUT_US_ROUTE.path}>About us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}