import { NavLink } from "react-router";
import clsx from "clsx";

//Routes
import { ABOUT_US_ROUTE } from "~app/components/AboutUs/about.route";
import { EXPLORE_ROUTE } from "~app/components/Explore/explore.route";
import { HOME_ROUTE } from "~app/components/Home/home.route";
import { FAIRY_TALE_ROUTE } from "~modules/App/components/Fairytale/fairytale.route";


//Components
import { SearchBar } from "~shared/SearchBar";

//CSS
import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <div className="outer-wrapper">
      <nav className={clsx(styles["navigation"])}>
        <NavLink to={HOME_ROUTE.path}><img className={clsx(styles["navigation--logo"])} src="./images/logo/Logo_cp_front-end.svg" alt="Logo" /></NavLink>
        <div className={clsx(styles["navigation--links"])}>
          <NavLink className={({ isActive }) => clsx({ [styles.active]: isActive })} to={EXPLORE_ROUTE.path}>EXPLORE</NavLink>
          <NavLink className={({ isActive }) => clsx({ [styles.active]: isActive })} to="/making-of/sam-hoeterickx-de-wolf-en-de-3-biggetjes" > MAKING OF</NavLink>
          <NavLink className={({ isActive }) => clsx({ [styles.active]: isActive })} to={ABOUT_US_ROUTE.path}>ABOUT US</NavLink>
          <NavLink className={({ isActive }) => clsx({ [styles.active]: isActive })} to={FAIRY_TALE_ROUTE.path}>FAIRYTALE</NavLink>
          <SearchBar />
        </div>
      </nav>
    </div>
  );
};