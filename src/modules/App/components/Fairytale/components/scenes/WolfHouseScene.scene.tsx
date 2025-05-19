import clsx from "clsx";
import { FC, useEffect, useState, useRef } from "react";
import { Html, PerspectiveCamera, Text3D } from "@react-three/drei";
import gsap from "gsap";

//Models
import { Hill } from "../models/Hill.model";
import { HouseAndPig } from "../HouseAndPig"
import { Wolf } from "../models/Wolf.model"

//Css 
import styles from '../../pages/fairytale.module.scss'

//Type
interface WolfHouseSceneProps {
    selectedPig: string | null;
    setCurrentScene: (scene: string) => void;
    setIsFlashing:  (flash: boolean) => void;
}

interface TreeData {
    key: number;
    path: string;
    scale: number;
    position: [number, number, number];
    rotation: [number, number, number];
}

const WolfHouseScene: FC<WolfHouseSceneProps> = ({ selectedPig, setCurrentScene, setIsFlashing }) => {
    const [forestData, setForestData] = useState<TreeData[]>([]);
    const [wolfPosition, setWolfPosition] = useState({ x: -10, z: -5 });
    const [isPigJumping, setIsPigJumping] = useState<boolean>(false);
    const [buttonState, setButtonState] = useState<string>("hidden");
    const pigPositionRef = useRef({ y: -1 });
    const wolfPositionRef = useRef({ y: -.755 });

    useEffect(() => {
        if (Math.floor(wolfPosition.x) === -4 && !isPigJumping) {
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
        let initialScrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;

        const totalWolfDistance = 8; 
        let lastScrollPosition = window.scrollY;
        let jumpTimer:any = null;
        
        const handleScroll = () => {
            const scrollProgress = (window.scrollY - initialScrollY) / (maxScroll - initialScrollY);
            
            const newWolfPositionX = -10 + (scrollProgress * totalWolfDistance);
            
            const clampedX = Math.min(Math.max(newWolfPositionX, -10), -2);
            
            setWolfPosition((prev) => ({ ...prev, x: clampedX }));

            const isScrollingDown = window.scrollY > lastScrollPosition;
            
            if (isScrollingDown && !jumpTimer) {
                jumpTimer = setTimeout(() => {
                    jumpTimer = null;
                }, 300);
                
                gsap.to(wolfPositionRef.current, {
                    y: -0.655, 
                    duration: 0.15,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.to(wolfPositionRef.current, {
                            y: -.755, 
                            duration: 0.15,
                            ease: "power2.in"
                        });
                    }
                });
            }
            
            lastScrollPosition = window.scrollY;

            if(window.scrollY === maxScroll){
                // console.log("end")
                setButtonState('inline')
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (jumpTimer) clearTimeout(jumpTimer);
        };
    }, []);

    const blow = () => {
        console.log("wind")
        setIsFlashing(true)
        setTimeout(() => {
            if(selectedPig === "straw" || selectedPig === "wooden"){
                setCurrentScene("afterblow");
            }else{
                setCurrentScene("finalScene")
            }
            
            setIsFlashing(false)
        }, 1000);
    }

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
            
            <group name="Hills">
                <Hill
                    scale={ 5 }
                    position={[ -35, 1, -25]}
                    rotation={[ 0, 0, 0 ]}
                />
                <Hill
                    scale={ 7 }
                    position={[ -24, 2, -45]}
                    rotation={[ 0, Math.PI * 0.1, 0 ]}
                />
                <Hill
                    scale={ 4 }
                    position={[ -18.5, .7, -55]}
                    rotation={[ 0, -Math.PI * 0.7, 0 ]}
                />

                <Hill
                    scale={ 12 }
                    position={[ 0, 4, -100]}
                    rotation={[ 0, Math.PI * 0.4, 0 ]}
                />  

                <Hill
                    scale={ 8 }
                    position={[ 18.5, 2.5, -55]}
                    rotation={[ 0, -Math.PI * 0.7, 0 ]}
                />

                <Hill
                    scale={ 10 }
                    position={[ 20, 3, -45]}
                    rotation={[ 0, Math.PI * 0.7, 0 ]}
                />  

                <Hill
                    scale={ 8 }
                    position={[ 50, 2.25, -45]}
                    rotation={[ 0, Math.PI * 0.7, 0 ]}
                />  
            </group>

            <Wolf
                scale={ 0.75 }
                position={ [wolfPosition.x, wolfPositionRef.current.y, 1] }
                rotation={ [0, Math.PI * 0.3, 0] }
            /> 
            
            {/* {console.log(wolfPosition, isPigJumping, wolfScale)} */}

            <group
                rotation={[ 0, - Math.PI * 0.3, 0]}
            >
                <HouseAndPig
                    path={`/models/${selectedPig}_house.glb`}
                    houseScale={2.5}
                    housePosition={[2.5, 1, -1]}
                    rotation={[0, 0, 0]}
                    pigScale={0.5}
                    pigPosition={[2.2, pigPositionRef.current.y, 0.4]}
                />
            </group>


        
            <Text3D 
                font="./fonts/luckiest_guy.json"
                size={0.2} 
                height={0.2} 
                curveSegments={8}
                bevelEnabled
                bevelThickness={.05} 
                bevelSize={0.01}
                bevelOffset={0}
                bevelSegments={8}
                position={[-10, 2, 0]}  
                rotation={[Math.PI * 0.075, 0, 0]}
            >
                {`Little pig, little pig
let me in! Or I'll huff and 
puff and I'll blow 
your house in!`}
                <meshPhysicalMaterial 
                    color="#FFFFFF"  
                    metalness={0.5}  
                    roughness={0.2}
                    emissive="#000"
                    emissiveIntensity={0.3}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                />
            </Text3D>

            {buttonState === 'inline' && (
                <group position={ [0, 0, -2] }>
                    <Html className={clsx(styles["button-outer-wrapper"])}>
                        <div className={clsx(styles["button-outer-wrapper--button-wrapper"])}>
                            <button onClick={ blow }>Blow</button>
                        </div>
                    </Html>
                </group>
            )}
            {/* <OrbitControls /> */}
        </>
    );
};

export default WolfHouseScene