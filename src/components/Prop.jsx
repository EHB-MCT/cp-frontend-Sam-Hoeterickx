import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Prop = ({ path ,scale, position, rotation }) => {

    const gltf = useLoader(GLTFLoader, path)
    if(gltf){
        // console.log("active")
        // console.log(gltf)
        console.log("gltf is not loaded")
        console.log(gltf)
    }

    return(
        <>
            <primitive 
                object={ gltf.scene.clone() } 
                scale={ scale } 
                position={ position } 
                rotation={ rotation }
                receiveShadow
                castShadow
            />
        </>
    )
}

export default Prop;