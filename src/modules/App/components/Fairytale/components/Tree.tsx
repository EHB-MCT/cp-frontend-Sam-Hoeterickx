import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { Object3D } from "three";
import { useLoader } from "@react-three/fiber";

//Type
interface TreeProps {
    scale: [number, number, number] | number;
    position: [number, number, number];
    rotation: [number, number, number];
    path: string;
}

const Tree: React.FC<TreeProps> = ({ scale, position, rotation, path }) => {
    const gltf = useLoader(GLTFLoader, path);

    return (
        <primitive
            object={gltf.scene.clone() as Object3D}
            scale={scale}
            position={position}
            rotation={rotation}
            receiveShadow
            castShadow
        />
    );
};

export default Tree;