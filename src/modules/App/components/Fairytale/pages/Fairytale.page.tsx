import { Canvas } from '@react-three/fiber'
import clsx from 'clsx';
import { Perf } from 'r3f-perf'
import { useEffect, useState } from 'react';

// Components
import AnimatedText from '../components/AnimatedText'
import CloudScene from '../components/CloudScene'
import Lights from '../components/Lights'
import HouseSelection from '../components/HouseSelection'
import { WolfHouseScene } from '../components/WolfHouseScene';

// CSS
import styles from './fairytale.module.scss';

//Type
interface MousePosition {
    x: number;
    y: number;
}

export const Fairytale = () => {

    document.title = "De wolf en de 3 biggetjes | Sam Hoeterickx";
    document.body.classList.add('fairytale');

    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [selectedPig, setSelectedPig] = useState<string | null>(null);
    const [currentScene, setCurrentScene] = useState<string>('houseSelection');
    const [isFlashing, setIsFlashing] = useState<boolean>(false);

    useEffect(() => {
        console.log(selectedPig);
    }, [selectedPig]);

    useEffect(() => {
        const handleMouseMovement = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMovement);

        return () => {
            window.removeEventListener('mousemove', handleMouseMovement);
        };
    }, []);

    useEffect(() => {
        console.log(isFlashing);
    }, [isFlashing]);

    

    return (
        <>
            {console.log('render')}
            <div className={clsx(
                styles["flash-overlay"],
                isFlashing && styles["active"]
            )} />
            <div className={clsx(styles['scroll-wrapper'])}>
                <div className={clsx(`${styles['opening-scene']} ${styles.scene}`)}>
                    <Canvas id="canvas">
                        <Lights 
                            intensity={ 1.5 } 
                            position={ [10, 10, 5] } 
                        />
                        <CloudScene mousePosition={ mousePosition } />
                    </Canvas>
                </div>

                <div className={clsx(styles["scene"])}>
                    <Canvas id='canvas'>
                        <AnimatedText Text={"Now that the skies have cleared, The three little pigs set off on their own adventure."} />
                    </Canvas>
                </div>

                <div className={clsx(styles["scene"])}>
                    <Canvas id='canvas'>
                        <Lights intensity={1.5} position={[10, 10, 5]} />
                        <AnimatedText Text={"Each one has a plan, a dream… and a very different idea of what makes a strong house"} />
                    </Canvas>
                </div>
                <div className={clsx(styles["scene"], styles["scene-3"], { [styles["wolf-house-scene"]]: currentScene === "continue" })}>
                    <Canvas id='canvas'>
                    <Perf position="top-left" />
                        <Lights intensity={1.5} position={[10, 10, 5]} />
                        {currentScene === 'houseSelection' && (
                            <HouseSelection
                                selectedPig={ selectedPig }
                                setSelectedPig={ setSelectedPig }
                                setCurrentScene={ setCurrentScene }
                                setIsFlashing={ setIsFlashing }

                            />
                        )}
                        {currentScene === 'continue' && (
                            <WolfHouseScene 
                                selectedPig={ selectedPig }
                            />
                        )

                        }
                    </Canvas>
                </div>
                
            </div>
        </>
    );
};