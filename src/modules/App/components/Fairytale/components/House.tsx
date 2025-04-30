import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/Addons.js"

//Components
import Pig from "./Pig"


const House = ({ path, houseScale, housePosition, rotation, pigScale, pigPosition }) => {

    const gltf = useLoader(GLTFLoader, path);

    return(
        <>
            <Pig 
                scale={ pigScale }
                position={ pigPosition }
                rotation={ rotation }
            />

            <primitive
                object={ gltf.scene.clone() }
                scale={ houseScale }
                position={ housePosition }
                rotation={ rotation }
                receiveShadow
                castShadow
            />

        </>
    )

}

export default House