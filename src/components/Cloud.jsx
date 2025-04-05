import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const Cloud = ({ scale, position }) => {
        const gltf = useLoader(GLTFLoader, "../../public/Cloud_Dreamscape_0405175547_texture.glb")
        if(gltf){
            console.log("active")
            console.log(gltf)
        }

        return (
            <primitive 
                object={gltf.scene} 
                scale={scale} 
                position={position} 
            />
        )
}

export default Cloud