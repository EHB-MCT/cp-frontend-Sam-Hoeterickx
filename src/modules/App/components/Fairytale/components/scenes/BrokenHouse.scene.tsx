import { FC } from "react";
import { Html, PerspectiveCamera } from "@react-three/drei";
import clsx from "clsx";

//Models
import { BrokenHouse } from "../models/BrokenHouse.model";
import { Hill } from "../models/Hill.model";

//Css
import styles from '../../pages/fairytale.module.scss'

//Type
interface BrokenHouseType {
    selectedPig: string | null;
    setCurrentScene: (scene: string) => void;
    setIsFlashing:  (flash: boolean) => void;
}

export const BrokenHouseScene: FC<BrokenHouseType> = ({ selectedPig, setCurrentScene, setIsFlashing }) => {

    const restart = () => {
        setIsFlashing(true)
        setTimeout(() => {
            setCurrentScene("houseSelection");
            setIsFlashing(false)
        }, 1000);
    }

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

            <BrokenHouse
                path={`/models/BrokenHouse_${selectedPig}.glb`}
                scale={ 2.5 }
                position={[ 1, -1.1, -1 ]}
                rotation={[ 0, Math.PI * 0.5, 0 ]}
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