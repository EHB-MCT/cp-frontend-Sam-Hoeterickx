import { FC } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { Object3D } from "three";
import { useLoader } from "@react-three/fiber";

//Type
interface WolfProps {
    scale: [ number, number, number] | number;
    position: [ number, number, number];
    rotation: [ number, number, number];
}

export const Wolf: FC<WolfProps> = ({ scale, position, rotation }) => {
    const gltf = useLoader(GLTFLoader, "/models/Wolfie_Joy_0512115612_texture.glb");

    if(!gltf) console.log("gltf is not loaded");

    return(
        <>
            <primitive
                object={gltf.scene.clone() as Object3D}
                scale={ scale }
                position={ position }
                rotation={ rotation }
                receiveShadow
                castShadow
            />
            <meshStandardMaterial color={"red"} />
        </>
    )
}