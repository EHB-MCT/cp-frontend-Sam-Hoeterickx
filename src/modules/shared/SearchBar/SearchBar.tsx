import clsx from "clsx";

//CSS
import styles from "./searchBar.module.scss";

export const SearchBar = () => {
    return (
        <div className={clsx(styles["search-bar"])}>
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
        </div>
    );
}