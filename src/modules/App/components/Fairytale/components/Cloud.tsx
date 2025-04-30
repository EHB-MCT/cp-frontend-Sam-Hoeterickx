import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const Cloud = ({ scale, position, rotation }) => {
        const gltf = useLoader(GLTFLoader, "models/cloud.glb")
        if(!gltf){
            // console.log("active")
            // console.log(gltf)
            console.log("gltf is not loaded")
        }

        return (
            <>
                <primitive 
                    object={gltf.scene.clone()} 
                    scale={scale} 
                    position={position} 
                    rotation={rotation}
                    receiveShadow
                    castShadow
                />
            </>
            
        )
}

export default Cloud