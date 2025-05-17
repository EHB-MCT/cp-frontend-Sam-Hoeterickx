import { FC } from "react";
import { BrokenHouse } from "../models/BrokenHouse.model";
import { Html, PerspectiveCamera } from "@react-three/drei";
import clsx from "clsx";

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
                position={[ 0, 0, 7 ]} 
                rotation={[ 0, 0, 0 ]}
            />
            <mesh
                rotation={[ -Math.PI * 0.5, 0, -Math.PI * 0.2 ]}
                position={[ 0, -1.5, 0 ]}
            >
                <planeGeometry args={ [100, 100] } />
                <meshStandardMaterial color={ "green" } />
            </mesh>
            <BrokenHouse
                path="/models/BrokenHouse_wooden.glb"
                // path="/models/BrokenHouse_${selectedPig}.glb"
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