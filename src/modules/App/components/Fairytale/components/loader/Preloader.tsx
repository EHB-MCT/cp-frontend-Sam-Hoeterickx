import { FC } from "react";
import { usePreload } from "./PreLoadProvider";
// import clsx from "clsx";

//CSS 
import styles from './preloader.module.scss'
import { motion } from "framer-motion";

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
                <h2>{Math.round(progress)}%</h2>
                
                <div className={styles.loadingHint}>
                 <p>Once upon a time, there were three little pigs...</p>
                </div>

                <motion.div 
                    className={styles.wolfImageWrapper}
                    initial={{ y: 800 }}
                    animate={{ y: 0}}
                >
                    <img src="./images/fairytale/Wolf_cutout.png" alt="image of the wolf" />
                </motion.div>
            </div>
        </div>
    );
  };