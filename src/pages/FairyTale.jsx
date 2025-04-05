import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Cloud from '../components/Cloud'

const FairyTale = () => {


    return (
        <Canvas>

            <OrbitControls />

            <ambientLight 
                intensity={0.5} 
            />

            <directionalLight 
                position={[10, 10, 5]} 
                intensity={1} 
            />

            <Cloud 
                scale={ 1 }
                position={ 0 } 
            />
        

        </Canvas>
    )
}

export default FairyTale