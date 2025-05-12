import { Canvas } from '@react-three/fiber'
import clsx from 'clsx';
import { useEffect, useState } from 'react'

// Components
import AnimatedText from '../components/AnimatedText'
import CloudScene from '../components/CloudScene'
import Lights from '../components/Lights'
import HouseSelection from '../components/HouseSelection'

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

    return (
        <>
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
                <div className={clsx(styles["scene"], styles["scene-3"])}>
                    <Canvas id='canvas'>
                        <Lights intensity={1.5} position={[10, 10, 5]} />
                        <HouseSelection
                            selectedPig={selectedPig}
                            setSelectedPig={setSelectedPig}
                        />
                    </Canvas>
                </div>
            </div>
        </>
    );
};