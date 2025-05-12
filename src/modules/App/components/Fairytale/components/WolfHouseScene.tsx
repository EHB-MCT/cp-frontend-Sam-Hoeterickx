import { FC, useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";

//Components
import House from "./House"
import { Wolf } from "./Wolf"

//Type
interface WolfHouseSceneProps {
    selectedPig: string | null;
}

export const WolfHouseScene: FC<WolfHouseSceneProps> = ({ selectedPig }) => {
    const [wolfPosition, setWolfPosition] = useState({ x: -10, z: -5 });

    useEffect(() => {
        const handleScroll = () => {
            // Calculate new x position based on scroll
            // You can adjust the division factor (20) to control movement speed
            const newX = window.scrollY / 20;
            
            setWolfPosition(prev => ({
                ...prev,
                x: Math.min(Math.max(newX - 10, -10), 15) // Clamp between -10 and 15
            }));
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <>
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