import { FC } from "react";

// Components
import { ModelLoader } from "./ModelLoader";

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

    return (
        <>
            <ModelLoader 
                path={ './models/pig.glb' }
                scale={ pigScale } 
                position={ pigPosition } 
                rotation={ rotation } 
            />

            <ModelLoader
                path={ path }
                scale={ houseScale } 
                position={ housePosition } 
                rotation={ rotation } 
            />
        </>
    );
};
