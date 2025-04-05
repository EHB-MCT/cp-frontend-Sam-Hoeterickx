import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// const taxtiModel = () => {
//     const gltf = useLoader(GLTFLoader, "models/taxti.gltf")
// }

const FairyTale = () => {
    const gltf = useLoader(GLTFLoader, "models/taxti.gltf")

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <primitive object={gltf.scene} scale={0.01} position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
        </Canvas>
    )
}

export default FairyTale