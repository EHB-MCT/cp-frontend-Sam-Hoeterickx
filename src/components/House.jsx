
//Components
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/Addons.js"

//Components
import Pig from "./Pig.jsx"


const House = ({ path, houseScale, housePosition, houseRotation, pigScale, pigPosition, pigRotation }) => {

    const gltf = useLoader(GLTFLoader, path);

    return(
        <>
            <Pig 
                scale={ pigScale }
                position={ pigPosition }
                rotation={ pigRotation }
            />

            <primitive
                object={ gltf.scene.clone() }
                scale={ houseScale }
                position={ housePosition }
                rotation={ houseRotation }
                receiveShadow
                castShadow
            />

        </>
    )

}

export default House