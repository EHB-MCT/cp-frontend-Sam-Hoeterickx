import { Html, OrbitControls } from "@react-three/drei";
import { useState } from "react";

//Compnentw
import House from "./House.jsx";
import { PlaneGeometry } from "three";

const Scene3 = () => {
    const [enableControls, setEnableControls] = useState(false);

    const handleClick = () => {
        setEnableControls(!enableControls);
    };

    return (
        <>
            {enableControls && <OrbitControls />}
            <group>
                {/* Left house */}
                <House
                    path={"../../public/models/wooden_house.glb"}
                    houseScale={1.5}
                    housePosition={[-3.3, 0, 0]}
                    rotation={[0, Math.PI * 0.25, 0]}
                    pigScale={0.5}
                    pigPosition={[-3, -1, 1.4]}
                />

                {/* Middle house */}
                <House
                    path={"../../public/models/straw_house.glb"}
                    houseScale={1.5}
                    housePosition={[0, 0, -1]}
                    rotation={[0, 0, 0]}
                    pigScale={0.5}
                    pigPosition={[0, -1, 0.4]}
                />

                {/* Right house */}
                <House
                    path={"../../public/models/stone_house.glb"}
                    houseScale={1.5}
                    housePosition={[3.3, 0, 0]}
                    rotation={[0, -Math.PI * 0.25, 0]}
                    pigScale={0.5}
                    pigPosition={[3, -1, 1.4]}
                />

                <mesh rotation={ [-Math.PI * 0.5, 0, -Math.PI * 0.2] } position={ [0, -1.5, 0] }>
                    <planeGeometry args={ [10, 10] } />
                    <meshStandardMaterial color={"green"} />
                </mesh>
            </group>
            <Html>
                <button onClick={handleClick}>
                    {enableControls ? "Disable OrbitControls" : "Enable OrbitControls"}
                </button>
            </Html>
        </>
    );
};

export default Scene3;