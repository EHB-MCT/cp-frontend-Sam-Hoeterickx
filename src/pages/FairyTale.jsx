import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'

//Components
import CloudScene from '../components/CloudScene'

//CSS
import '../components/FairyTale.css'

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
        <div className="scroll-wrapper">
            <div className="opening-scene scene">
                <Canvas id='canvas'>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    
                    <CloudScene mousePosition={mousePosition} />
                </Canvas>
            </div>
            <div className="scene scene-2">
            </div>
        </div>
    )
}

export default FairyTale