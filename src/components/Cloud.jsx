import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const Cloud = ({ scale, position, rotation }) => {
        const gltf = useLoader(GLTFLoader, "../../public/Cloud_Dreamscape_0405175547_texture.glb")
        if(gltf){
            console.log("active")
            console.log(gltf)
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
                <meshStandardMaterial 
                    color={"red"}
                />
            </>
            
        )
}

export default Cloud