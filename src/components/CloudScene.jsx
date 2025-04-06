import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Center, Html } from '@react-three/drei'
import { motion } from 'framer-motion'

//Components
import Cloud from './Cloud.jsx'
import Text from './Text.jsx'

//CSS
import './CloudScene.css'

const CloudScene = ({ mousePosition }) => {
    const smoothMousePosition = useRef({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        }

        handleResize();
        window.addEventListener('resize', handleResize);
    })

    useFrame(() => {
        // Smoothly interpolate the mouse position
        smoothMousePosition.current.x += (mousePosition.x - smoothMousePosition.current.x) * 0.1;
        smoothMousePosition.current.y += (mousePosition.y - smoothMousePosition.current.y) * 0.1;
    })

    return (
        <>
            <Cloud
                scale={isMobile ? 0.5 : 1.5}
                position={[
                    isMobile ? -1.3 : -5.75 - smoothMousePosition.current.x * 0.45,
                    -1.55 - smoothMousePosition.current.y * 0.45,
                    -1,
                ]}
                rotation={[0, Math.PI * 0.05, 0]}
            />
            <Cloud
                scale={1}
                position={[
                    isMobile ? 2 : 5 - smoothMousePosition.current.x * 0.45,
                    2 - smoothMousePosition.current.y * 0.45,
                    0,
                ]}
                rotation={[0, -Math.PI * 0.3, 0]}
            />
            <Cloud
                scale={2}
                position={[
                    isMobile ? -2 : -6 - smoothMousePosition.current.x * 0.45,
                    4.5 - smoothMousePosition.current.y * 0.45,
                    -4,
                ]}
            />
            <Cloud
                scale={isMobile ? 2 : 4}
                position={[
                    isMobile ? 1 : 4.25 - smoothMousePosition.current.x * 0.45,
                    -5 - smoothMousePosition.current.y * 0.45,
                    -6,
                ]}
            />
            <Html position={[0, 1, -10]} center>
                <div className="hero-text">
                    <motion.h1
                        initial={{ opacity: 0, y: 500 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        exit={{ opacity: 0, y: - 500 }}
                    >
                        Once upon a time three little pigs lived in a house
                    </motion.h1>
                </div>
            </Html>
        </>
    )
}

export default CloudScene