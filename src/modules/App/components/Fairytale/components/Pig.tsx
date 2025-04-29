import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/Addons.js"


const Pig = ({ scale, position, rotation}) => {

    const gltf = useLoader(GLTFLoader, "../../public/models/pig.glb")
    if(!gltf) console.log("gltf is not loaded");


    return (
        <>
            <primitive 
                object={gltf.scene.clone()} 
                scale={ scale } 
                position={ position } 
                rotation={ rotation}
                receiveShadow
                castShadow
            />
            <meshStandardMaterial 
                color={"red"}
            />
        </>
    )
}

export default Pig