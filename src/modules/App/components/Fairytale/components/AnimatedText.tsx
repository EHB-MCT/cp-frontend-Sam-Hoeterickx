import { Center, Html } from '@react-three/drei'
import clsx from 'clsx';
import { motion } from 'framer-motion'

//Css
import styles from './cloudScene.module.scss'

//Type
interface AnimatedTextProps {
    Text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ Text }) => {
    const textVariants = {
        initial: { opacity: 0, y: 500 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: 'easeOut' },
        exit: { opacity: 0, y: -500 },
    }

    return (
        <>
            <Html 
                position={[0, 1, -10]} 
                center
            >
                <div className="scene-2-text">
                    <motion.h1
                        className={clsx(styles["fairy-tale-h1"])}
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {Text}
                    </motion.h1>
                </div>
            </Html>
        </>
    )
}

export default AnimatedText