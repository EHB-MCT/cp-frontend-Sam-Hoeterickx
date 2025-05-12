import clsx from "clsx";
import gsap from "gsap";
import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";

// Component
import House from "./House.tsx";
import Tree from "./Tree.tsx";

//Css
import styles from '../pages/fairytale.module.scss'

//Type
interface HouseSelectionProps {
    selectedPig: string | null;
    setSelectedPig: (pig: string) => void;
    setCurrentScene: (scene: string) => void;
}

interface TreeData {
    key: number;
    path: string;
    scale: number;
    position: [number, number, number];
    rotation: [number, number, number];
}

const HouseSelection: React.FC<HouseSelectionProps> = ({ selectedPig, setSelectedPig, setCurrentScene }) => {
    const center: [number, number, number] = [0, 0, -3];
    const radius = 6;
    const cameraHeight = 0.3;

    const numberOfHouses = 3;
    const angleIncrease = (2 * Math.PI) / numberOfHouses;

    const { camera } = useThree();
    const [angleIndex, setAngleIndex] = useState<number>(0);
    const [forestData, setForestData] = useState<TreeData[]>([]);

    useEffect(() => {
        const angle = angleIndex * angleIncrease;
        const x = center[0] + radius * Math.sin(angle);
        const z = center[2] + radius * Math.cos(angle);

        gsap.to(camera.position, {
            duration: 1.5,
            x: x,
            y: cameraHeight,
            z: z,
            onUpdate: () => {
                camera.lookAt(...center);
            },
        });
    }, [angleIndex, camera, center]);

    useEffect(() => {
        const trees: TreeData[] = [];
        for (let i = 0; i < 150; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = 10 + Math.random() * 10;
            const x = Math.cos(angle) * distance;
            const z = Math.sin(angle) * distance;

            const path =
                i % 2 === 0
                    ? "/models/round-tree.glb"
                    : "/models/tree-1.glb";

            const scale = Math.random() * 2 + 1;

            trees.push({
                key: i,
                path: path,
                scale: scale,
                position: [x, 0, z],
                rotation: [0, Math.random() * Math.PI * 2, 0],
            });
        }
        setForestData(trees);
    }, []);

    const next = () => {
        setAngleIndex((previousAngle) => {
            let next = previousAngle + 1;
            if (next >= numberOfHouses) {
                next = 0;
            }
            return next;
        });
    };

    const previous = () => {
        setAngleIndex((prev) => {
            let next = prev - 1;
            if (next < 0) {
                next = numberOfHouses - 1;
            }
            return next;
        });
    };

    const selectPig = () => {
        let pig: string | null;
        if (angleIndex === 0) {
            pig = "straw";
        } else if (angleIndex === 1) {
            pig = "stone";
        } else if (angleIndex === 2) {
            pig = "wooden";
        }

        gsap.to(camera.position, {
            duration: 1, 
            x: 0,
            y: cameraHeight,
            z: radius,
            onUpdate: () => {
                camera.lookAt(...center);
            },
            onComplete: () => {
                setSelectedPig(pig);
                setCurrentScene("continue");
            }
        })

        
    };

    return (
        <>
            <primitive object={ camera }>
                <group position={ [0, 0, -2] }>
                    <Html className={clsx(styles["button-outer-wrapper"])} fullscreen>
                        <div className={clsx(styles["button-outer-wrapper--button-wrapper"])}>
                            <button onClick={ previous }>Previous</button>
                            <button onClick={ selectPig }>Select</button>
                            <button onClick={ next }>Next</button>
                        </div>
                    </Html>
                </group>
            </primitive>
            <group>
                {/* Left house */}
                <House
                    path={ "/models/wooden_house.glb" }
                    houseScale={ 1.5 }
                    housePosition={ [-2, 0, -4] }
                    rotation={ [0, -Math.PI * 0.6666666666, 0] }
                    pigScale={ 0.5 }
                    pigPosition={ [-3.3, -1, -4] }
                />

                {/* Middle house */}
                <House
                    path={ "/models/straw_house.glb" }
                    houseScale={ 1.5 }
                    housePosition={ [0, 0, -1] }
                    rotation={ [0, 0, 0] }
                    pigScale={ 0.5 }
                    pigPosition={ [0.3, -1, 0.4] }
                />

                {/* Right house */}
                <House
                    path={ "/models/stone_house.glb" }
                    houseScale={ 1.5 }
                    housePosition={ [2, 0, -4] }
                    rotation={ [0, Math.PI * 0.6666666666, 0] }
                    pigScale={ 0.5 }
                    pigPosition={ [3.3, -1, -4] }
                />

                {/* Floor */}
                <mesh
                    rotation={ [-Math.PI * 0.5, 0, -Math.PI * 0.2] }
                    position={ [0, -1.5, 0] }
                >
                    <planeGeometry args={ [100, 100] } />
                    <meshStandardMaterial color={ "green" } />
                </mesh>

                {/* Forest */}
                <Tree
                    path={ "/models/round-tree.glb" }
                    scale={ 1.75 }
                    position={ [0, 0.25, -3] }
                    rotation={ [0, 0, 0] }
                />
                <Tree
                    path={ "/models/tree-1.glb" }
                    scale={ 1.3 }
                    position={ [0, -0.25, -4.4] }
                    rotation={ [0, 0, 0] }
                />
                <Tree
                    path={ "/models/tree-1.glb" }
                    scale={ 1.3 }
                    position={ [1.5, -0.25, -2.2] }
                    rotation={ [0, 0, 0] }
                />
                <Tree
                    path={ "/models/tree-1.glb" }
                    scale={ 1.3 }
                    position={ [-1.5, -0.25, -2.2] }
                    rotation={ [0, 0, 0] }
                />
            </group>

            <group>
                {/* Forest */}
                {forestData.map((tree) => (
                    <Tree
                        key={ tree.key }
                        path={ tree.path }
                        scale={ tree.scale }
                        position={ tree.position }
                        rotation={ tree.rotation }
                    />
                ))}
            </group>
        </>
    );
};

export default HouseSelection