import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FC } from 'react';
import { Group } from 'three';

//Type
interface CloudProps {
    scale?: [number, number, number] | number;
    position?: [number, number, number];
    rotation?: [number, number, number];
}

export const Cloud: FC<CloudProps> = ({ scale, position, rotation }) => {
    const gltf = useLoader(GLTFLoader, '/models/cloud.glb') as { scene: Group };

    if (!gltf) {
        console.log('gltf is not loaded');
    }

    return (
        <>
            <primitive
                object={gltf.scene.clone()}
                scale={scale}
                position={position}
                rotation={rotation}
                receiveShadow
                castShadow
            />
        </>
    );
};