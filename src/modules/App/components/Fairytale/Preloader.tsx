import { FC } from "react";
import { usePreload } from "./PreLoadProvider";
import clsx from "clsx";

//CSS 
import styles from './preloader.module.scss'


export const Preloader: FC = () => {
    const { progress, isLoaded } = usePreload();

    return (
       
        <div className={clsx(styles.preloader, { [styles.hidden]: isLoaded })}>
        <div className={clsx(styles['content'])}>
            <h2>Loading "The Wolf and the Three Little Pigs"</h2>
            <div className={clsx(styles['progressBar'])}>
                <div 
                    className={clsx(styles['progressFill'])} 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p>{Math.round(progress)}%</p>
        </div>
    </div>
    )
}