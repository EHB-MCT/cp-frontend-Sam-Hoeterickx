import { FC } from "react";
import { usePreload } from "./PreLoadProvider";
// import clsx from "clsx";

//CSS 
import styles from './preloader.module.scss'

export const Preloader: FC = () => {
    const { progress, isLoaded } = usePreload();

    return (
        <div className={`${styles.preloader} ${isLoaded ? styles.hidden : ''}`}>
            <div className={styles.content}>
                <h2>Loading...</h2>
                <h2>The Wolf and the Three Little Pigs</h2>
                <div className={styles.progressBar}>
                <div 
                    className={styles.progressFill} 
                    style={{ width: `${progress}%` }}
                />
                </div>
                <p>{Math.round(progress)}% loaded</p>
                
                <div className={styles.loadingHint}>
                <p>Once upon a time, there were three little pigs...</p>
                </div>
            </div>
        </div>
    );
  };