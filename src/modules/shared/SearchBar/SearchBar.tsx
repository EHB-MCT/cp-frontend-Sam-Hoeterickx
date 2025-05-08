import clsx from "clsx";

//CSS
import styles from "./searchBar.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router";

//Routes
import { EXPLORE_ROUTE } from "~app/components/Explore/explore.route";

export const SearchBar = () => {

    const [clickState, setClickState] = useState<boolean | undefined>(false);

    const toggleState = () => {
        clickState ?  setClickState(false) :  setClickState(true)
    }

    const nav = useNavigate();

    const handleChange = (event: { target: { value: any; }; }) => {
        if(location.pathname !== "/explore"){
            nav(EXPLORE_ROUTE.path)
        }

        console.log(event.target.value)
    }

    return (
        <div className={clsx(styles["search-bar"])}>
            {
                clickState ? <div><input type="text" placeholder="Search..." onChange={handleChange} /> <button type="submit" onClick={toggleState}>🔍</button></div> : <div><button onClick={toggleState}>🔍</button></div>
            }
            
        </div>
    );
}