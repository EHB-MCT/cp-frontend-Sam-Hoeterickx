import { FC, useEffect, useState, useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";

//Components
import House from "./House"
import Tree from "./Tree";
import { Wolf } from "./Wolf"

//Type
interface WolfHouseSceneProps {
    selectedPig: string | null;
}

interface TreeData {
    key: number;
    path: string;
    scale: number;
    position: [number, number, number];
    rotation: [number, number, number];
}

export const WolfHouseScene: FC<WolfHouseSceneProps> = ({ selectedPig }) => {
    const [forestData, setForestData] = useState<TreeData[]>([]);
    const [wolfPosition, setWolfPosition] = useState({ x: -10, z: -5 });
    const [isPigJumping, setIsPigJumping] = useState(false);
    const pigPositionRef = useRef({ y: -1 });

    useEffect(() => {
        if ( Math.floor(wolfPosition.x ) === -4 && !isPigJumping) {
            setIsPigJumping(true);
            

            gsap.to(pigPositionRef.current, {
                y: -0.5, 
                duration: .85,
                ease: "power3.inOut",
                yoyo: false,
                repeat: 2, 
                onComplete: () => {
                    pigPositionRef.current.y = -1;
                    setIsPigJumping(false);
                }
            });
        }
    }, [wolfPosition.x, isPigJumping]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowRight") {
                setWolfPosition((prev) => ({ ...prev, x: prev.x + 0.1 }));
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    //Als wolfPosition === 2 dan terug een lichtflits en verander scene
    //Als selectedPig = straw of wooden -> huis kapot op de grond + restart button
    //Als selectedPig = stone -> gewonnen


    return(
        <>
            <PerspectiveCamera
                makeDefault
                position={[wolfPosition.x + 2, 0, 7]} 
                rotation={[0, 0, 0]}
            />
            <mesh
                rotation={ [-Math.PI * 0.5, 0, -Math.PI * 0.2] }
                position={ [0, -1.5, 0] }
            >
                <planeGeometry args={ [100, 100] } />
                <meshStandardMaterial color={ "green" } />
            </mesh>

            <Tree
                path="/models/round-tree.glb"
                scale={ 1.5 }
                position={[-2, 0, -3]}
                rotation={[0, 0, 0]}
            />


            <Wolf
                scale={ .75 }
                position={ [wolfPosition.x, -.755, 1] }
                rotation={ [0, Math.PI * 0.3, 0] }
            /> 
            
            {console.log(wolfPosition, isPigJumping)}

            <group
                rotation={[ 0, - Math.PI * 0.3, 0]}
            >
                <House
                    path={`/models/${selectedPig}_house.glb`}
                    houseScale={2.5}
                    housePosition={[2.5, 1, -1]}
                    rotation={[0, 0, 0]}
                    pigScale={0.5}
                    pigPosition={[2.2, pigPositionRef.current.y, 0.4]}
                />
            </group>

            {/* <OrbitControls/> */}
        </>
    );
};