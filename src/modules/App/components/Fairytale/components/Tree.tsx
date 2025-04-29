
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/Addons.js"

const Tree = ({ scale, position, rotation, path }) => {

    const gltf = useLoader(GLTFLoader, path)  

    return(
        <primitive
            object={ gltf.scene.clone() }
            scale={ scale }
            position={ position }
            rotation={ rotation }
            receiveShadow
            castShadow
        />
    )

}

export default Tree