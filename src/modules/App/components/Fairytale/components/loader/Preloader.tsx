import { FC } from "react";
import { motion } from "framer-motion";
import { usePreload } from "./PreLoadProvider";

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
                <h2>{Math.round(progress)}%</h2>

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