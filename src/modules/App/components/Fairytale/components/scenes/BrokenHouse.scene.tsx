import * as THREE from "three";
import { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import { Html, PerspectiveCamera } from "@react-three/drei";
import clsx from "clsx";

//Models
import { ModelLoader } from "../ModelLoader";
import { Text } from "../Text";

//Css
import styles from '../../pages/fairytale.module.scss'


//Type
interface BrokenHouseType {
    selectedPig: string | null;
    setCurrentScene: (scene: string) => void;
    setIsFlashing:  (flash: boolean) => void;
}

const BrokenHouseScene: FC<BrokenHouseType> = ({ selectedPig, setCurrentScene, setIsFlashing }) => {

    const wolfRef = useRef<THREE.Group>(null);
    console.log(selectedPig)

    const restart = () => {
        setIsFlashing(true)
        setTimeout(() => {
            setCurrentScene("houseSelection");
        }, 500)
        setTimeout(() => {
            setIsFlashing(false)
        }, 1500);
    }

    useEffect(() => {
        if(wolfRef.current){
            gsap.to(wolfRef.current.position, {
                y: .5, 
                duration: 0.6,
                ease: "power1.out",
                repeat: -1,
                yoyo: true,
                delay: 0.4,
                repeatDelay: 0.4
            });
        }
    }, [])

    return (
        <>
            <PerspectiveCamera
                makeDefault
                position={[0, 0, 7]} 
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
                <ModelLoader
                    path={ './models/Hill.glb' }
                    scale={ 5 }
                    position={[ -35, 1, -25]}
                    rotation={[ 0, 0, 0 ]}
                />
                <ModelLoader
                    path={ './models/Hill.glb' }
                    scale={ 7 }
                    position={[ -24, 2, -45]}
                    rotation={[ 0, Math.PI * 0.1, 0 ]}
                />
                <ModelLoader
                    path={ './models/Hill.glb' }
                    scale={ 4 }
                    position={[ -18.5, .7, -55]}
                    rotation={[ 0, -Math.PI * 0.7, 0 ]}
                />

                <ModelLoader
                    path={ './models/Hill.glb' }
                    scale={ 12 }
                    position={[ 0, 4, -100]}
                    rotation={[ 0, Math.PI * 0.4, 0 ]}
                />  

                <ModelLoader
                    path={ './models/Hill.glb' }
                    scale={ 8 }
                    position={[ 18.5, 2.5, -55]}
                    rotation={[ 0, -Math.PI * 0.7, 0 ]}
                />

                <ModelLoader
                    path={ './models/Hill.glb' }
                    scale={ 10 }
                    position={[ 20, 3, -45]}
                    rotation={[ 0, Math.PI * 0.7, 0 ]}
                />  

                <ModelLoader
                    path={ './models/Hill.glb' }
                    scale={ 8 }
                    position={[ 50, 2.25, -45]}
                    rotation={[ 0, Math.PI * 0.7, 0 ]}
                />  
            </group>

            <ModelLoader
                path={`./models/BrokenHouse_wooden.glb`}
                scale={ 2.5 }
                position={[ 1, -1.1, -1 ]}
                rotation={[ 0, Math.PI * 0.5, 0 ]}
            />
            <group ref={wolfRef} >
                <ModelLoader
                    path={' ./models/Wolfie_Joy_0512115612_texture.glb' }
                    scale={ 0.75 }
                    position={ [-2, -.755, 1] }
                    rotation={ [0, Math.PI * 0.2, 0] }
                /> 
            </group>

            <Text
                text="You Lose!"
            />

            <group position={ [0, 0, -2] }>
                <Html className={clsx(styles["button-outer-wrapper"])} fullscreen>
                    <div className={clsx(styles["button-outer-wrapper--button-wrapper"])}>
                        <button onClick={ restart }>Restart</button>
                    </div>
                </Html>
            </group>
        </>
    )
}

export default BrokenHouseScene