import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

// Components
import AnimatedText from './AnimatedText';
import Cloud from './models/Cloud.model';

// CSS
import './cloudScene.module.scss';

//Type
interface CloudSceneProps {
    mousePosition: {
        x: number;
        y: number;
    };
}

const CloudScene: React.FC<CloudSceneProps> = ({ mousePosition }) => {
    const smoothMousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useFrame(() => {
        smoothMousePosition.current.x += (mousePosition.x - smoothMousePosition.current.x) * 0.1;
        smoothMousePosition.current.y += (mousePosition.y - smoothMousePosition.current.y) * 0.1;
    });

    return (
        <>
            <AnimatedText Text="Once upon a time three little pigs lived in a house" />
            <Cloud
                scale={ isMobile ? 0.5 : 1.5 }
                position={[
                    isMobile ? -1.3 : -5.75 - smoothMousePosition.current.x * 0.45,
                    -1.55 - smoothMousePosition.current.y * 0.45,
                    -1,
                ]}
                rotation={[ 0, Math.PI * 0.05, 0 ]}
            />
            <Cloud
                scale={ 1 }
                position={[
                    isMobile ? 2 : 5 - smoothMousePosition.current.x * 0.45,
                    2 - smoothMousePosition.current.y * 0.45,
                    0,
                ]}
                rotation={[ 0, -Math.PI * 0.3, 0 ]}
            />
            <Cloud
                scale={ 2 }
                position={[
                    isMobile ? -2 : -6 - smoothMousePosition.current.x * 0.45,
                    4.5 - smoothMousePosition.current.y * 0.45,
                    -4,
                ]}
            />
            <Cloud
                scale={ isMobile ? 2 : 4 }
                position={[
                    isMobile ? 1 : 4.25 - smoothMousePosition.current.x * 0.45,
                    -5 - smoothMousePosition.current.y * 0.45,
                    -6,
                ]}
            />
        </>
    );
};

export default CloudScene;