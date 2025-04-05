import { Text3D } from "@react-three/drei"

const Text = ({ text, position }) => {

    return (
        <Text3D
            font="/fonts/luckiest_guy.json"
            size={0.5}
            height={0.08}
            curveSegments={8}
            bevelEnabled={true}
            bevelThickness={0.03}
            bevelSize={0.02}
            bevelSegments={5}
            position={position}
        >
            { text }
            <meshStandardMaterial color="white" />
        </Text3D>
    )
}

export default Text