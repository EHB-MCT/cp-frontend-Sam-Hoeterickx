import { Center, Html } from '@react-three/drei'
import { motion } from 'framer-motion'

const AnimatedText = ({ Text }) => {
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
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >{ Text }</motion.h1>
                </div>
                
            </Html>
        </>
    )
}

export default AnimatedText