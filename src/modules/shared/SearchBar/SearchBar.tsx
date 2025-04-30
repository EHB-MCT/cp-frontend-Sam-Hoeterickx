import clsx from "clsx";

//CSS
import styles from "./searchBar.module.scss";
import { useState } from "react";

export const SearchBar = () => {

    const [clickState, setClickState] = useState<boolean | undefined>(false);

    const toggleState = () => {
        clickState ?  setClickState(false) :  setClickState(true)
    }

    return (
        <div className={clsx(styles["search-bar"])}>
            {
                clickState ? <div><input type="text" placeholder="Search..." /> <button type="submit" onClick={toggleState}>🔍</button></div> : <div><button onClick={toggleState}>🔍</button></div>
            }
            
        </div>
    );
}