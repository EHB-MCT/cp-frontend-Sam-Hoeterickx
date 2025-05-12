import { FC } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { Object3D } from "three";
import { useLoader } from "@react-three/fiber";

// Components
import Pig from "./Pig";

//Type
interface HouseProps {
    path: string;
    houseScale: [number, number, number] | number;
    housePosition: [number, number, number];
    rotation: [number, number, number];
    pigScale: [number, number, number] | number;
    pigPosition: [number, number, number];
}

const House: FC<HouseProps> = ({ path, houseScale, housePosition, rotation, pigScale, pigPosition,}) => {

    const gltf = useLoader(GLTFLoader, path);

    return (
        <>
            <Pig 
                scale={ pigScale } 
                position={ pigPosition } 
                rotation={ rotation } 
            />

            <primitive
                object={gltf.scene.clone() as Object3D}
                scale={houseScale}
                position={housePosition}
                rotation={rotation}
                receiveShadow
                castShadow
            />
        </>
    );
};

export default House;