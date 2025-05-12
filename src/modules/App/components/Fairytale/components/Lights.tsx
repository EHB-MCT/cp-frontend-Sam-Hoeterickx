import React from 'react';

//Type
type LightsProps = {
    position: [number, number, number] | number;
    intensity: number;
};

const Lights: React.FC<LightsProps> = ({ position, intensity }) => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={position} intensity={intensity} />
        </>
    );
};

export default Lights;