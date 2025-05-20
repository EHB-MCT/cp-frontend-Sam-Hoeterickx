import { FC } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { Object3D } from "three";
import { useLoader } from "@react-three/fiber";


//Type
interface PigProps {
    scale?: [number, number, number] | number;
    position?: [number, number, number];
    rotation?: [number, number, number];
}

export const Pig: FC<PigProps> = ({ scale, position, rotation }) => {
    const gltf = useLoader(GLTFLoader, "/models/pig.glb");

    if (!gltf) console.log("gltf is not loaded");

    return (
        <>
            <primitive
                object={gltf.scene.clone() as Object3D}
                scale={scale}
                position={position}
                rotation={rotation}
                receiveShadow
                castShadow
            />
            <meshStandardMaterial color={"red"} />
        </>
    );
};