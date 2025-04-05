import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text3D, Center } from '@react-three/drei'

import Cloud from '../components/Cloud'

const FairyTale = () => {


    return (
        <Canvas>

            {/* <OrbitControls /> */}

            <ambientLight 
                intensity={0.5} 
            />

            <directionalLight 
                position={[10, 10, 5]} 
                intensity={1} 
            />

            <Cloud 
                scale={ 1.5 }
                position={ [-5.75, -1.55, -1] } 
                rotation={ [0, Math.PI * 0.05, 0] }
            />
            <Cloud 
                scale={ 1 }
                position={ [5, 2, 0] } 
                rotation={ [0, - Math.PI * 0.3, 0] }
            />
            <Cloud 
                scale={ 2 }
                position={ [-6, 4.5, -4] } 
            />

            <Cloud 
                scale={ 4 }
                position={ [4.25, -8, -6] } 
            />

            <Center>
                <Text3D
                    font="/fonts/helvetiker_regular.typeface.json"
                    size={ .75 } 
                    height={ 0.5 } 
                    curveSegments={ 8 }
                    bevelEnabled={ true } 
                    bevelThickness={ 0.03 } 
                    bevelSize={ 0.02 } 
                    bevelSegments={ 5 } 
                    position={ [0, 0, 0] }
                >
                    Fairy Tale!
                    <meshStandardMaterial color="white" /> 
                </Text3D>
            </Center>
        

        </Canvas>
    )
}

export default FairyTale