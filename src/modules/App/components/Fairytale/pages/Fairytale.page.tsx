import { Canvas } from '@react-three/fiber'
import clsx from 'clsx';
import { Perf } from 'r3f-perf'
import { useEffect, useState } from 'react';

// Components
import AnimatedText from '../components/AnimatedText'
import { BrokenHouseScene } from '../components/BrokenHouse.scene';
import CloudScene from '../components/CloudScene'
import Lights from '../components/Lights'
import HouseSelection from '../components/HouseSelection'
import { WolfHouseScene } from '../components/WolfHouseScene';

// CSS
import styles from './fairytale.module.scss';
import Pig from '../components/Pig';

//Type
interface MousePosition {
    x: number;
    y: number;
}

export const Fairytale = () => {

    document.title = "De wolf en de 3 biggetjes | Sam Hoeterickx";
    document.body.classList.add('fairytale');

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = '/images/temp_images/Wolf.png'; // Replace with the path to your favicon
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);
    

    // console.log(scrollY)

    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [selectedPig, setSelectedPig] = useState<string | null>(null);
    const [currentScene, setCurrentScene] = useState<string>('houseSelection');
    const [isFlashing, setIsFlashing] = useState<boolean>(false);

    // useEffect(() => {
    //     console.log(selectedPig);
    // }, [selectedPig]);

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

    // useEffect(() => {
    //     console.log(isFlashing);
    // }, [isFlashing]);

    
    useEffect(() => {
      if (currentScene === 'wolfScene') {
        let lastScrollY = window.scrollY;
        
        const handleScroll = () => {
          if (window.scrollY < lastScrollY) {
            window.scrollTo(0, lastScrollY);
          } else {
            lastScrollY = window.scrollY;
          }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
    }, [currentScene]);

    

    return (
        <>
            {/* {console.log('render')} */}
            <div className={clsx(
                styles["flash-overlay"],
                isFlashing && styles["active"]
            )} />
                <div className={clsx(
                    styles['scroll-wrapper'],
                    currentScene === 'wolfScene' && styles['no-snap-scroll']
                )}>
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
                
                <div className={clsx(styles["scene"], styles["scene-3"], { [styles["wolf-house-scene"]]: currentScene === "wolfScene" })}>
                    {currentScene === 'houseSelection' && (
                        <Canvas id='canvas'>
                            <Perf position="top-left" />
                            <Lights intensity={1.5} position={[10, 10, 5]} />
                            <HouseSelection
                                selectedPig={selectedPig}
                                setSelectedPig={setSelectedPig}
                                setCurrentScene={setCurrentScene}
                                setIsFlashing={setIsFlashing}
                            />
                        </Canvas>
                    )}
                    
                    {currentScene === 'wolfScene' && (
                        <>
                            <div className={styles["fixed-canvas-container"]}>
                                <Canvas id='canvas'>
                                    <Perf position="top-left" />
                                    <Lights intensity={1.5} position={[10, 10, 5]} />
                                    <WolfHouseScene 
                                        selectedPig={selectedPig} 
                                        setCurrentScene={setCurrentScene}
                                        setIsFlashing={setIsFlashing}
                                    />
                                </Canvas>
                            </div>
                            <div className={styles["scroll-content"]}>
                            </div>
                        </>
                    )}
                    {currentScene === 'afterblow' && (
                        <>
                            <div className={styles["fixed-canvas-container"]}>
                                <Canvas id='canvas'>
                                    <Perf position="top-left" />
                                    <Lights intensity={1.5} position={[10, 10, 5]} />
                                    <BrokenHouseScene
                                        selectedPig={selectedPig} 
                                        setCurrentScene={setCurrentScene}
                                        setIsFlashing={setIsFlashing}
                                    />
                                </Canvas>

                            </div>
                        </>
                    )}

                    {currentScene === 'finalScene' && (
                        <>
                            <div className={styles["fixed-canvas-container"]}>
                                <Canvas id='canvas'>
                                    <Perf position="top-left" />
                                    <Lights intensity={1.5} position={[10, 10, 5]} />
                                    <Pig />
                                </Canvas>

                            </div>
                        </>
                    )}
                </div>
                
            </div>
        </>
    );
};