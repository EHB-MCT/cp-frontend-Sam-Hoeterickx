import { Canvas } from '@react-three/fiber'
import clsx from 'clsx';
import { Perf } from 'r3f-perf'
import { lazy, Suspense, useEffect, useState } from 'react';

// Components
const AnimatedText = lazy(() => import('../components/AnimatedText'))
const BrokenHouseScene = lazy(() => import('../components/scenes/BrokenHouse.scene'))
const CloudScene = lazy(() => import('../components/CloudScene.scene'))
import { Lights } from '../components/Lights';
const HouseSelectionScene = lazy(() => import('../components/scenes/HouseSelection.scene'));
const WolfHouseScene = lazy(() => import('../components/scenes/WolfHouseScene.scene'));
const WinningScene = lazy(() => import('../components/scenes/WinningScene.scene'))

// CSS
import styles from './fairytale.module.scss';

//Type
interface MousePosition {
    x: number;
    y: number;
}

const Fairytale = () => {

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
    // const [currentScene, setCurrentScene] = useState<string>('finalScene');
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
                                <Perf position="top-left" />
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
                            <Perf position="top-left" />
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
                    {currentScene === 'wolfScene' && (
                        <div className={styles["scroll-content"]}>
                        </div>
                    )}
                </div>
                
            </div>
        </>
    );
};

export default Fairytale