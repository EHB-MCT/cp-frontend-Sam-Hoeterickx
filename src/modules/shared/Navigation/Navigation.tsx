import { NavLink } from "react-router";
import clsx from "clsx";

//Routes
import { ABOUT_US_ROUTE } from "~app/components/AboutUs/about.route";
import { ALL_FAIRY_TALES_ROUTE } from "~app/components/AllFairyTales/allFairyTales.route";
import { EXPLORE_ROUTE } from "~app/components/Explore/explore.route";

//Components
import { SearchBar } from "~shared/SearchBar";

//CSS
import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <div className="outer-wrapper">
      <nav className={clsx(styles["navigation"])}>
        <NavLink to={ALL_FAIRY_TALES_ROUTE.path}><img className={clsx(styles["navigation--logo"])} src="/Logo_cp_front-end.svg" alt="Logo" /></NavLink>
        <div className={clsx(styles["navigation--links"])}>
          <NavLink className={({ isActive }) => clsx({ [styles.active]: isActive })} to={EXPLORE_ROUTE.path}>Explore</NavLink>
          <NavLink className={({ isActive }) => clsx({ [styles.active]: isActive })} to={ABOUT_US_ROUTE.path}>About</NavLink>
          <NavLink className={({ isActive }) => clsx({ [styles.active]: isActive })} to="/making-of/2" > Making Of</NavLink>
          <SearchBar />
        </div>
      </nav>
    </div>
  );
};