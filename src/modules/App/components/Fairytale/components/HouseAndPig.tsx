import { FC } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { Object3D } from "three";
import { useLoader } from "@react-three/fiber";

// Components
import Pig from "./models/Pig.model";
import { House } from "./models/House.model";

//Type
interface HouseAndPigProps {
    path: string;
    houseScale: [number, number, number] | number;
    housePosition: [number, number, number];
    rotation: [number, number, number];
    pigScale: [number, number, number] | number;
    pigPosition: [number, number, number];
}

export const HouseAndPig: FC<HouseAndPigProps> = ({ path, houseScale, housePosition, rotation, pigScale, pigPosition,}) => {

    const gltf = useLoader(GLTFLoader, path);

    return (
        <>
            <Pig 
                scale={ pigScale } 
                position={ pigPosition } 
                rotation={ rotation } 
            />

            <House
                path={ path }
                scale={ houseScale } 
                position={ housePosition } 
                rotation={ rotation } 
            />
        </>
    );
};
