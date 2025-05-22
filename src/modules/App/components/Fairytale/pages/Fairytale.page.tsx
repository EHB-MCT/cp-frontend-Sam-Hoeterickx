import { Canvas } from '@react-three/fiber'
import clsx from 'clsx';
import { lazy, Suspense, useEffect, useState } from 'react';

// Components
import { AnimatedText } from '../components/AnimatedText';
import { Lights } from '../components/Lights';
import { CloudScene } from '../components/CloudScene.scene';
import { HouseSelectionScene } from '../components/scenes/HouseSelection.scene';
import { WolfHouseScene } from '../components/scenes/WolfHouseScene.scene';

//Lazy import components
const BrokenHouseScene = lazy(() => import('../components/scenes/BrokenHouse.scene'))
const WinningScene = lazy(() => import('../components/scenes/WinningScene.scene'))

// PreLoaders
import { AssetPreloader } from '../components/loader/AssetPreloader';
import { Preloader } from '../components/loader/Preloader';
import { PreloadProvider, usePreload } from '../components/loader/PreLoadProvider';

// CSS
import styles from './fairytale.module.scss';

// Type
interface MousePosition {
    x: number;
    y: number;
}

export const FairytaleContent = () => {
    const { isLoaded } = usePreload();

    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [selectedPig, setSelectedPig] = useState<string | null>(null);
    const [currentScene, setCurrentScene] = useState<string>('houseSelection');
    const [isFlashing, setIsFlashing] = useState<boolean>(false);

    // Mouse parallax effect 
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

    // Disable scrolling to top
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

    // Show loading state in console for debugging
    useEffect(() => {
        console.log(`Is loaded state: ${isLoaded}`);
    }, [isLoaded]);

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
                        <CloudScene mousePosition={ mousePosition } />
                    </Canvas>
                </div>

                <div className={clsx(styles["scene"])}>
                    <Canvas id='canvas'>
                        <AnimatedText Text={"Now that the skies have cleared, The three little pigs set off on their own adventure"} />
                    </Canvas>
                </div>

                <div className={clsx(styles["scene"])}>
                    <Canvas id='canvas'>
                        <Lights intensity={1.5} position={[10, 10, 5]} />
                        <AnimatedText Text={"Each one has a plan, a dream… and a very different idea of what makes a strong house"} />
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
                            </Canvas>
                        </div>
                    ) : (
                        <Canvas id='canvas'>
                            {/* <Perf position="top-left" /> */}
                            <Lights intensity={1.5} position={[10, 10, 5]} />
                                <HouseSelectionScene
                                    selectedPig={selectedPig}
                                    setSelectedPig={setSelectedPig}
                                    setCurrentScene={setCurrentScene}
                                    setIsFlashing={setIsFlashing}
                                />
                        </Canvas>
                    )}
                    
                    {/* Scroll content only for wolf scene */}
                    {currentScene === 'wolfScene'  && (
                        <div className={styles["scroll-content"]}>
                        </div>
                    )}
                </div>
                
            </div>
            <audio 
                src='./audio/Up_maried_life.mp3' 
            />
        </>
    )
}

export const Fairytale = () => {
    //Change document title
    document.title = "De wolf en de 3 biggetjes | Sam Hoeterickx";
    document.body.classList.add('fairytale');

    //Change favicon image
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = './images/temp_images/Wolf.png';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);
    
    return (
        <PreloadProvider>
            <Preloader />

            {/* This canvas is hidden but used to preload all assets and scenes */}
            <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', opacity: 0 }}>
                <Canvas>
                    <Suspense fallback={<Preloader />}>
                        <AssetPreloader />
                        <Lights intensity={1.5} position={[10, 10, 5]} />
                        
                        {/* Include all scene components to trigger their loading */}
                        <group visible={false}>
                            <CloudScene mousePosition={{ x: 0, y: 0 }} />
                            <AnimatedText Text="" />
                            <HouseSelectionScene 
                                selectedPig={null} 
                                setSelectedPig={() => {}} 
                                setCurrentScene={() => {}}
                                setIsFlashing={() => {}} 
                            />
                            <WolfHouseScene 
                                selectedPig={null}
                                setCurrentScene={() => {}}
                                setIsFlashing={() => {}}  
                            />
                        </group>
                    </Suspense>
                </Canvas>
            </div>

            <FairytaleContent />
        </PreloadProvider>
    );
};