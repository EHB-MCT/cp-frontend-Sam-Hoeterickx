import clsx from "clsx";
import gsap from "gsap";
import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";

// Component
import { HouseAndPig } from "../HouseAndPig.tsx";
import { ModelLoader } from "../ModelLoader.tsx";

//Css
import styles from '../../pages/fairytale.module.scss'

//Type
interface HouseSelectionProps {
    selectedPig: string | null;
    setSelectedPig: (pig: string) => void;
    setCurrentScene: (scene: string) => void;
    setIsFlashing: (flash: boolean) => void;
    setLightIntensity: (lightIntensity: number) => void;
    setBackgroundColor: (backgroundColor: string) => void;
}


export const HouseSelectionScene: React.FC<HouseSelectionProps> = ({ selectedPig, setSelectedPig, setCurrentScene, setIsFlashing, setLightIntensity, setBackgroundColor }) => {
    const center: [number, number, number] = [0, 0, -3];
    const radius = 6;
    const cameraHeight = 0.3;

    const numberOfHouses = 3;
    const angleIncrease = (2 * Math.PI) / numberOfHouses;

    const { camera } = useThree();
    const [angleIndex, setAngleIndex] = useState<number>(0);    
    const [viewWolfHouseState, setViewWolfHouseState] = useState<boolean>(false);
    const [spotlighVisibilityState, setSpotlighVisibilityState] = useState<boolean>(false)
    const [displayState, setDisplayState] = useState<boolean>(true);

    useEffect(() => {
        if(!viewWolfHouseState){
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
        }
    }, [angleIndex, camera, center, viewWolfHouseState]);

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
        setIsFlashing(true)
        let pig: string;
        if (angleIndex === 0) {
            pig = "straw";
        } else if (angleIndex === 1) {
            pig = "stone";
        } else {
            pig = "wooden";
        }
        setSelectedPig(pig);
        
        setTimeout(() => {
            setCurrentScene("wolfScene");
        }, 500)
        
        setTimeout(() => {
            setIsFlashing(false)
            console.log(selectedPig)
        }, 1500);
    };

    const moveCameraToWolfHouse = () => {
        setViewWolfHouseState(true);
        setDisplayState(false);
        setSpotlighVisibilityState(true)

        const cameraStopPosition: [number, number, number] = [ -35, -.5, -50 ];        
        const lookAtPoint: [number, number, number] = [-33, 0, -47];

        setLightIntensity(-0.3);
        setBackgroundColor("#1b2d3f");
        
        gsap.to(camera.position, {
            duration: 2,
            x: cameraStopPosition[0],
            y: cameraStopPosition[1],
            z: cameraStopPosition[2],
            ease: "power2.inOut",
            onUpdate: () => {
                camera.lookAt(...lookAtPoint);
            },
        });
    };

    const moveCameraBackToPigs = () => {
        setViewWolfHouseState(false);
        setDisplayState(true);
        setSpotlighVisibilityState(false)

        setLightIntensity(1.5);
        setBackgroundColor("linear-gradient(180deg, #0654ab 0%, #00d4ff 80%)");
    } 

    return (
        <>
            <primitive object={ camera }>
                <group position={ [0, 0, -2] }>
                    <Html 
                        className={clsx(styles["button-outer-wrapper"])} 
                        fullscreen
                    >
                        {
                            displayState ? (
                                <div className={clsx(styles["button-outer-wrapper--button-wrapper"])}>
                                    <button onClick={ (e) => {
                                        e.stopPropagation();
                                        previous()
                                    }}>Previous</button>
                                    <button onClick={ (e) => {
                                        e.stopPropagation();
                                        selectPig()
                                    }}>Select</button>
                                    <button onClick={ (e) => {
                                        e.stopPropagation();
                                        next();
                                    }}>Next</button>
                                </div>
                            ) : (
                                <div className={clsx(styles["button-outer-wrapper--button-wrapper"])}>
                                    <button onClick={ (e) => {
                                        e.stopPropagation();
                                        moveCameraBackToPigs();
                                    }}>Return</button>
                                </div>
                            )
                        }
                    </Html>
                </group>
            </primitive>

            <group name="mid of the scene">
                {/* Left house */}
                <HouseAndPig
                    path={ "./models/wooden_house.glb" }
                    houseScale={ 1.5 }
                    housePosition={ [-2, 0, -4] }
                    rotation={ [0, -Math.PI * 0.6666666666, 0] }
                    pigScale={ 0.5 }
                    pigPosition={ [-3.3, -1, -4] }
                />

                {/* Middle house */}
                <HouseAndPig
                    path={ "./models/straw_house.glb" }
                    houseScale={ 1.5 }
                    housePosition={ [0, 0, -1] }
                    rotation={ [0, 0, 0] }
                    pigScale={ 0.5 }
                    pigPosition={ [0.3, -1, 0.4] }
                />

                {/* Right house */}
                <HouseAndPig
                    path={ "./models/stone_house.glb" }
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
                    <planeGeometry args={ [200, 200] } />
                    <meshStandardMaterial color={ "green" } />
                </mesh>

                {/* Forest */}
                <group name="Forest">
                    <ModelLoader
                        path={ "./models/round-tree.glb" }
                        scale={ 1.75 }
                        position={ [0, 0.25, -3] }
                        rotation={ [0, 0, 0] }
                    />
                    <ModelLoader
                        path={ "./models/tree-1.glb" }
                        scale={ 1.3 }
                        position={ [0, -0.25, -4.4] }
                        rotation={ [0, 0, 0] }
                    />
                    <ModelLoader
                        path={ "./models/tree-1.glb" }
                        scale={ 1.3 }
                        position={ [1.5, -0.25, -2.2] }
                        rotation={ [0, 0, 0] }
                    />
                    <ModelLoader
                        path={ "./models/tree-1.glb" }
                        scale={ 1.3 }
                        position={ [-1.5, -0.25, -2.2] }
                        rotation={ [0, 0, 0] }
                    />
                </group>
            </group>

            {/* Wolfs House */}
            <group position={[ -34, -.5, -47 ]} rotation={[ 0,0, 0 ]}>
                <ModelLoader
                    path={ "./models/wolf_house.glb" }
                    scale={ 1 }
                    position={[ 0, 0, 0 ]}
                    rotation={[ 0, - Math.PI * .9, 0 ]}
                />

                {/* Wolf */}
                <ModelLoader
                    path={ "./models/Wolfie_Joy_0512115612_texture.glb" }
                    scale={ 0.5 }
                    position={[ 1.5, -0.51, -1 ]}
                    rotation={ [0, - Math.PI * 0.7, 0] }
                /> 

                <mesh 
                    onClick={(e) => {
                        e.stopPropagation();
                        moveCameraToWolfHouse();
                    }}
                    position={[ 0, 20, 0 ]}
                    onPointerOver={(e) => {
                        document.body.style.cursor = 'pointer';
                        e.stopPropagation();
                    }}
                    onPointerOut={() => {
                        document.body.style.cursor = 'auto';
                    }}
                >
                    <boxGeometry args={[ 20, 40, 20 ]}/>
                    <meshBasicMaterial visible={false} />
                </mesh>
            </group>

            <rectAreaLight
                width={ 3 }
                height={ 3 }
                intensity={ 1.5 }
                color={ "#ffee00" }
                position={[ -36, 1, -48 ]}
                rotation={[ Math.PI * 0.3, -Math.PI * 0.5, 0 ]}
                lookAt={[ 0, 0, 0 ]}
                castShadow
                visible={ spotlighVisibilityState }
            />

            <group name="Hills">
                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 5 }
                    position={[ -35, 1, -25]}
                    rotation={[ 0, 0, 0 ]}
                />
                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 7 }
                    position={[ -24, 2, -45]}
                    rotation={[ 0, Math.PI * 0.1, 0 ]}
                />
                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 4 }
                    position={[ -18.5, .7, -55]}
                    rotation={[ 0, -Math.PI * 0.7, 0 ]}
                />

                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 12 }
                    position={[ 0, 4, -100]}
                    rotation={[ 0, Math.PI * 0.4, 0 ]}
                />  

                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 8 }
                    position={[ 18.5, 2.5, -55]}
                    rotation={[ 0, -Math.PI * 0.7, 0 ]}
                />

                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 10 }
                    position={[ 20, 3, -45]}
                    rotation={[ 0, Math.PI * 0.7, 0 ]}
                />  

                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 8 }
                    position={[ 50, 2.25, -45]}
                    rotation={[ 0, Math.PI * 0.7, 0 ]}
                />  
            </group>

            <group name="Hills" position={[ 0, 0, 0]} rotation={[ 0, Math.PI * 2.3, 0]}>
                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 5 }
                    position={[ -35, 1, 25]}
                    rotation={[ 0, 0, 0 ]}
                />
                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 7 }
                    position={[ -24, 1.8, 45]}
                    rotation={[ 0, Math.PI * 0.1, 0 ]}
                />
                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 4 }
                    position={[ -18.5, .7, 55]}
                    rotation={[ 0, -Math.PI * 0.7, 0 ]}
                />

                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 12 }
                    position={[ 0, 4, 100]}
                    rotation={[ 0, Math.PI * 0.4, 0 ]}
                />  

                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 8 }
                    position={[ 18.5, 2.5, 55]}
                    rotation={[ 0, -Math.PI * 0.7, 0 ]}
                />

                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 10 }
                    position={[ 20, 3, 45]}
                    rotation={[ 0, Math.PI * 0.7, 0 ]}
                />  

                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 8 }
                    position={[ 50, 2.25, 45]}
                    rotation={[ 0, Math.PI * 0.7, 0 ]}
                />  
            </group>

            <group name="Hills" position={[ 0, 0, 0]} rotation={[ 0, Math.PI * 1.7, 0]}>
                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 5 }
                    position={[ -35, 1, 25]}
                    rotation={[ 0, 0, 0 ]}
                />
                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 7 }
                    position={[ -24, 2, 45]}
                    rotation={[ 0, Math.PI * 0.1, 0 ]}
                />
                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 4 }
                    position={[ -18.5, .7, 55]}
                    rotation={[ 0, -Math.PI * 0.7, 0 ]}
                />

                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 12 }
                    position={[ 0, 4, 100]}
                    rotation={[ 0, Math.PI * 0.4, 0 ]}
                />  

                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 8 }
                    position={[ 18.5, 2.5, 55]}
                    rotation={[ 0, -Math.PI * 0.7, 0 ]}
                />

                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 10 }
                    position={[ 20, 3, 45]}
                    rotation={[ 0, Math.PI * 0.7, 0 ]}
                />  

                <ModelLoader
                    path={ "./models/Hill.glb" }
                    scale={ 8 }
                    position={[ 50, 2.25, 45]}
                    rotation={[ 0, Math.PI * 0.7, 0 ]}
                />  
            </group>
        </>
    );
};