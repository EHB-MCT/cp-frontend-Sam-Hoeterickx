import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'


//Components
import AnimatedText from '../components/AnimatedText.jsx'
import CloudScene from '../components/CloudScene.jsx'
import Lights from '../components/Lights.jsx'
import PigScene from '../components/PigScene.jsx'


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
                   <Lights
                        intensity={1.5}
                        position={[10, 10, 5]}
                   />
                    
                    <CloudScene mousePosition={mousePosition} />
                </Canvas>
            </div>
            <div className="scene">
                <Canvas id='canvas'>
                    <AnimatedText Text={"Now that the skies have cleared, The three little pigs set off on their own adventure."}/>
                </Canvas>
            </div>
            <div className="scene">
                <Canvas id='canvas'>
                    <Lights
                        intensity={1.5}
                        position={[10, 10, 5]}
                    />

                    <AnimatedText Text={"Each one has a plan, a dream… and a very different idea of what makes a strong house"}/>
                    <PigScene mousePosition={ mousePosition } />
                </Canvas>
            </div>
            
        </div>
    )
}

export default FairyTale