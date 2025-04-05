import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'

import CloudScene from '../components/CloudScene'

const FairyTale = () => {
    //zet de muispositie standaard op 0 en 0
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMovement = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1
            const y = -(e.clientY / window.innerHeight) * 2 + 1
            setMousePosition({ x, y })
        }

        window.addEventListener('mousemove', handleMouseMovement)
    }, [])

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />

            {/* CloudScene handles the clouds and parallax effect */}
            <CloudScene mousePosition={mousePosition} />
        </Canvas>
    )
}

export default FairyTale