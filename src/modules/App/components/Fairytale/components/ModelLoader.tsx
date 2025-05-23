import { FC } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { Object3D } from "three";
import { useLoader } from "@react-three/fiber"; 

interface ModelLoaderProps {
    path: string;
    scale: [number, number, number] | number;
    position: [number, number, number];
    rotation: [number, number, number]; 
    onClick?: () => void
}

export const ModelLoader: FC<ModelLoaderProps> =  ({ path ,scale, position, rotation, onClick}) => {
    const gltf = useLoader(GLTFLoader, path)

    return(
        <primitive
            object={gltf.scene.clone() as Object3D}
            scale={scale}
            position={position}
            rotation={rotation}
            receiveShadow
            castShadow
            onClick={ onClick }
        />
    )
}