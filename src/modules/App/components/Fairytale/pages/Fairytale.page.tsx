import { Canvas } from '@react-three/fiber'
import clsx from 'clsx';
// import { Perf } from 'r3f-perf'
import { lazy, Suspense, useEffect, useState } from 'react';

// Components
import { AnimatedText } from '../components/AnimatedText';
import { Lights } from '../components/Lights';
import { BrokenHouseScene } from '../components/scenes/BrokenHouse.scene';
import { CloudScene } from '../components/CloudScene.scene';
import { HouseSelectionScene } from '../components/scenes/HouseSelection.scene';
import { WolfHouseScene } from '../components/scenes/WolfHouseScene.scene';
import { WinningScene } from '../components/scenes/WinningScene.scene';


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

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = './images/temp_images/Wolf.png';
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

    //Disbale scrolling to top
    useEffect(() => {
      if (currentScene === 'wolfScene' || currentScene === 'afterblow' || currentScene === 'finalScene') {
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
                        <Suspense fallback={ null }>
                            <CloudScene mousePosition={ mousePosition } />
                        </Suspense>
                    </Canvas>
                </div>

                <div className={clsx(styles["scene"])}>
                    <Canvas id='canvas'>
                        <Suspense fallback={ null }>
                            <AnimatedText Text={"Now that the skies have cleared, The three little pigs set off on their own adventure."} />
                        </Suspense>
                    </Canvas>
                </div>

                <div className={clsx(styles["scene"])}>
                    <Canvas id='canvas'>
                        <Lights intensity={1.5} position={[10, 10, 5]} />
                        <Suspense fallback={ null }>
                            <AnimatedText Text={"Each one has a plan, a dream… and a very different idea of what makes a strong house"} />
                        </Suspense>
                    </Canvas>
                </div>
                
                <div className={clsx(
                    styles["scene"], 
                    styles["scene-3"], 
                    { [styles["wolf-house-scene"]]: currentScene === "wolfScene" }
                )}>

                    {(currentScene === 'wolfScene' || currentScene === 'afterblow' || currentScene === 'finalScene') ? (
                        <div className={styles["fixed-canvas-container"]}>
                            <Canvas id='canvas'>
                                {/* <Perf position="top-left" /> */}
                                <Lights intensity={1.5} position={[10, 10, 5]} />
                                <Suspense fallback={null}>
                                    
                                    {currentScene === 'wolfScene' && (
                                        <WolfHouseScene 
                                            selectedPig={selectedPig} 
                                            setCurrentScene={setCurrentScene}
                                            setIsFlashing={setIsFlashing}
                                        />
                                    )}
                                    
                                    {currentScene === 'afterblow' && (
                                        <BrokenHouseScene
                                            selectedPig={selectedPig} 
                                            setCurrentScene={setCurrentScene}
                                            setIsFlashing={setIsFlashing}
                                        />
                                    )}
                                    
                                    {currentScene === 'finalScene' && (
                                        <WinningScene />
                                    )}
                                </Suspense>
                            </Canvas>
                        </div>
                    ) : (
                        <Canvas id='canvas'>
                            {/* <Perf position="top-left" /> */}
                            <Lights intensity={1.5} position={[10, 10, 5]} />
                            <Suspense fallback={null}>
                                <HouseSelectionScene
                                    selectedPig={selectedPig}
                                    setSelectedPig={setSelectedPig}
                                    setCurrentScene={setCurrentScene}
                                    setIsFlashing={setIsFlashing}
                                />
                            </Suspense>
                        </Canvas>
                    )}
                    
                    {/* Scroll content only for wolf scene */}
                    {currentScene === 'wolfScene'  && (
                        <div className={styles["scroll-content"]}>
                        </div>
                    )}
                </div>
                
            </div>
        </>
    );
};