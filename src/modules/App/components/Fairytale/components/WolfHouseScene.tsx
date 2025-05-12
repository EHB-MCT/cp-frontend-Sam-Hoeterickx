import { FC, useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";

//Components
import House from "./House"
import { Wolf } from "./Wolf"
import { PerspectiveCamera } from "@react-three/drei";

//Type
interface WolfHouseSceneProps {
    selectedPig: string | null;
}

export const WolfHouseScene: FC<WolfHouseSceneProps> = ({ selectedPig }) => {
    const [wolfPosition, setWolfPosition] = useState({ x: -10, z: -5 });

    return(
        <>
            <PerspectiveCamera
                makeDefault
                position={[0, 0, 7]} 
                rotation={[0, 0, 0]}
            />
            <Wolf
                scale={1}
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
            /> 

            <House
                path={`/models/${selectedPig}_house.glb`}
                houseScale={1.5}
                housePosition={[2.5, 0, -1]}
                rotation={[0, 0, 0]}
                pigScale={0.5}
                pigPosition={[2.2, -1, 0.4]}
            />
        </>
    );
};