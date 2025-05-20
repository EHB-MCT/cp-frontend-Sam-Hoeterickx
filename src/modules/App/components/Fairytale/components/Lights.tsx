import React from 'react';

//Type
type LightsProps = {
    position: [number, number, number] | number;
    intensity: number;
};

export const Lights: React.FC<LightsProps> = ({ position, intensity }) => {
    return (
        <>
            <ambientLight intensity={0.4} />
            <directionalLight position={position} intensity={intensity} />
        </>
    );
};
