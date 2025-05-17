import { FC } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { Object3D } from "three";
import { useLoader } from "@react-three/fiber"; 

interface HillProps {
    scale: [number, number, number] | number;
    position: [number, number, number];
    rotation: [number, number, number];
}

export const Hill: FC<HillProps> =  ({ scale, position, rotation}) => {
    const gltf = useLoader(GLTFLoader, '/models/Hill.glb')

    return(
        <primitive
            object={gltf.scene.clone() as Object3D}
            scale={scale}
            position={position}
            rotation={rotation}
            receiveShadow
            castShadow
        />
    )
}