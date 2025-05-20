import { Float, Text3D } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { FC, useRef } from "react"
import * as THREE from "three"

interface TextProps {
    text: string;
}

export const Text: FC<TextProps> = ({ text }) => {
    const textRef = useRef<THREE.Mesh | null>(null)

    useFrame((state) => {
        if (textRef.current) {
            textRef.current.position.y = -5 + Math.sin(state.clock.elapsedTime) * 0.2
        }
    })
    
    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <group position={[0, 6, 0]}>
                <Text3D 
                    ref={(ref) => {
                        textRef.current = ref as THREE.Mesh;
                    }}
                    font="./fonts/luckiest_guy.json"
                    size={0.5} 
                    height={0.2} 
                    curveSegments={8}
                    bevelEnabled
                    bevelThickness={.05} 
                    bevelSize={0.01}
                    bevelOffset={0}
                    bevelSegments={8}
                    position={[-1.5, 0, 0]}  
                    rotation={[Math.PI * 0.03, 0, 0]}
                >
                    {text}
                    <meshPhysicalMaterial 
                        color="#FFFFFF"  
                        metalness={0.5}  
                        roughness={0.2}
                        emissive="#FFFFFF"
                        emissiveIntensity={0.3}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                    />
                </Text3D>
            </group>
        </Float>
    )
}