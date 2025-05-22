import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import { useLocation } from "react-router";

//Components
import { Widget } from "~shared/widget";

//Hooks
import { useFairyTaleData } from "~shared/const/hooks/getFairyTaleData.hook";

//Css
import styles from "./exlplore.module.scss";

export const Explore: FC = () => {
    document.title = "Explore | Er was eens...";    
    document.body.classList.add('main');

    const {data: fairyTales, isLoading} = useFairyTaleData();
    const [filterValue, setFilterValue] = useState<string | null>("all");
    const [filteredFairyTales, setFilteredFairyTales] = useState(fairyTales || []);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";

    useEffect(() => {
        if (!fairyTales) return;

        let filtered = fairyTales;

        if (filterValue !== "all" && filterValue !== null) {
            filtered = filtered.filter((fairyTale) =>
                fairyTale.genre.toLowerCase() === filterValue.toLowerCase()
            );
        }

        if (searchQuery) {
            filtered = filtered.filter((fairyTale) =>
                fairyTale.nameStudent.toLowerCase().includes(searchQuery) || fairyTale.fairytale.toLowerCase().includes(searchQuery)
            );
        }

        setFilteredFairyTales(filtered);
    }, [filterValue, fairyTales, searchQuery]);

    const handleFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
        const clickValue = (event.target as HTMLButtonElement).value;
        setFilterValue(clickValue);

        console.log(filterValue);
    }

    return (
        <div className="outer-wrapper">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <section className={clsx(styles["story-section"])}>
                        <h2>Storys</h2>
                        <div className={clsx(styles["story-section--filter-wrapper"])}>
                            <button
                                className={clsx(styles["story-section--filter-wrapper--filter-button"])}
                                value={"all"}
                                onClick={handleFilter}
                            >ALL</button>
                            <button
                                className={clsx(styles["story-section--filter-wrapper--filter-button"])}
                                value={"avontuur"}
                                onClick={handleFilter}
                            >Avontuur</button>
                            <button
                                className={clsx(styles["story-section--filter-wrapper--filter-button"])}
                                value={"horror"}
                                onClick={handleFilter}
                            >Horror</button>
                            <button
                                className={clsx(styles["story-section--filter-wrapper--filter-button"])}
                                value={"fantasie"}
                                onClick={handleFilter}
                            >Fantasie</button>
                            <button
                                className={clsx(styles["story-section--filter-wrapper--filter-button"])}
                                value={"mythologie"}
                                onClick={handleFilter}
                            >Mythologie</button>
                            <button
                                className={clsx(styles["story-section--filter-wrapper--filter-button"])}
                                value={"dierenverhaal"}
                                onClick={handleFilter}
                            >Dierenverhaal</button>
                             <button
                                className={clsx(styles["story-section--filter-wrapper--filter-button"])}
                                value={"romantiek"}
                                onClick={handleFilter}
                            >Romantiek</button>
                        </div>
                        <div className="widget-wrapper">
                            {filteredFairyTales && filteredFairyTales.length > 0 ? (
                                filteredFairyTales.map((fairyTale) => (
                                    <Widget
                                        key={fairyTale.id}
                                        id={fairyTale.id}
                                        title={fairyTale.fairytale}
                                        theme={fairyTale.genre}
                                        image={fairyTale.imgThumbnail}
                                        student={fairyTale.nameStudent}
                                    />
                                ))
                            ) : (
                                <p>No fairy tales available.</p>
                            )}
                        </div>
                    </section>
                </>
            )}
        </div>
    );
}