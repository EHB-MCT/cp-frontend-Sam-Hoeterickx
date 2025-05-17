import * as THREE from "three"
import { Center, Text3D, PerspectiveCamera, Float, OrbitControls } from "@react-three/drei"
import gsap from "gsap"
import { House } from "../models/House.model"
import Pig from "../models/Pig.model"
import { useFrame } from "@react-three/fiber"
import { useRef, useEffect, FC } from "react"

//Type
interface WinningSceneProps {
    //
}

export const WinningScene: FC<WinningSceneProps> = () => {
    const textRef = useRef<THREE.Mesh>(null)
    
    const pig1Ref = useRef<THREE.Group>(null)
    const pig2Ref = useRef<THREE.Group>(null)
    const pig3Ref = useRef<THREE.Group>(null)
    
    useEffect(() => {
        if (pig1Ref.current && pig2Ref.current && pig3Ref.current) {
            // Left pig - higher jumps
            gsap.to(pig1Ref.current.position, {
                y: 1, 
                duration: 1.2,
                ease: "power2.out",
                repeat: -1,
                yoyo: true,
                repeatDelay: 0.3
            });
            
            // Small rotation 
            gsap.to(pig1Ref.current.rotation, {
                z: 0.2, 
                duration: 1.2,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true
            });
            
            // Middle pig - medium jumps with front flip
            gsap.to(pig2Ref.current.position, {
                y: 1, 
                duration: 0.9,
                ease: "power2.out",
                repeat: -1,
                yoyo: true,
                delay: 0.4,
                repeatDelay: 0.2
            });
            
            // Front flip during jump
            gsap.to(pig2Ref.current.rotation, {
                x: Math.PI * 2, 
                duration: 2.2,
                ease: "power1.inOut",
                repeat: -1,
                delay: 0.4
            });
            
            // Right pig - small rapid jumps
            gsap.to(pig3Ref.current.position, {
                y: 1, 
                duration: 0.6,
                ease: "power3.out",
                repeat: -1,
                yoyo: true,
                delay: 0.7,
                repeatDelay: 0.1
            });
            
            // side-to-side rotation
            gsap.to(pig3Ref.current.rotation, {
                z: -0.15,
                x: 0.1, 
                duration: 0.6,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                delay: 0.7
            });
        }
    }, []);
    
    useFrame((state, delta) => {        
        if (textRef.current) {
            textRef.current.position.y = 8 + Math.sin(state.clock.elapsedTime) * 0.2
        }
    })
    
    return(
        <>
            <PerspectiveCamera 
                makeDefault
                position={[0, 0, 5]}
            />
            
            {/* Animated text */}
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <Center>
                    <Text3D 
                        ref={textRef}
                        font="./fonts/luckiest_guy.json"
                        size={.5}
                        height={0.4}
                        curveSegments={8}
                        bevelEnabled
                        bevelThickness={.1}
                        bevelSize={0.01}
                        bevelOffset={0}
                        bevelSegments={8}
                        position={[3.1, 8, -18]}
                        rotation={[Math.PI * 0.03, 0, 0]}
                    >
                        {`You won!`}
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
                </Center>
            </Float>
            
            <group position={[ 0, -.705, 1 ]}>
                <group ref={pig1Ref} position={[-1.5, 0, 0]}>
                    <Pig 
                        position={[0, 0, 0]} 
                        scale={.3}
                        rotation={[0, Math.PI / 8, 0]} 
                    />
                </group>

                <group ref={pig2Ref} position={[0, 0, 0]}>
                    <Pig 
                        position={[0, 0, 0]} 
                        scale={.3}
                        rotation={[0, 0, 0]} 
                    />
                </group>

                <group ref={pig3Ref} position={[1.5, 0, 0]}>
                    <Pig 
                        position={[0, 0, 0]} 
                        scale={.3}
                        rotation={[0, -Math.PI / 8, 0]} 
                    />
                </group>
            </group>

            <House
                path="/models/stone_house.glb"
                scale={ 1 }
                position={[ 0, -0.04, 0 ]}
                rotation={[ 0, 0, 0 ]}
            />

            <mesh
                rotation={[ -Math.PI * 0.5, 0, -Math.PI * 0.2 ]}
                position={[ 0, -1, 0 ]}
            >
                <planeGeometry args={ [100, 100] } />
                <meshStandardMaterial color={ "green" } />
            </mesh>

            <OrbitControls />
        </>
    )
}