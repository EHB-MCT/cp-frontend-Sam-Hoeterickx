import { Center, Text3D, PerspectiveCamera, Float, Environment, Stars } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react"
import * as THREE from "three"
import Pig from "../models/Pig.model"
import Tree from "../models/Tree.model"
import House from "../HouseAndPig"

export const WinningScene = () => {

    const textRef = useRef<THREE.Mesh>(null)
    
    useFrame((state, delta) => {        
        if (textRef.current) {
            textRef.current.position.y = 5 + Math.sin(state.clock.elapsedTime) * 0.2
        }
    })
    
    return(
        <>
            
            {/* Camera setup */}
            <PerspectiveCamera 
                makeDefault
                position={[0, 0, 15]}
                fov={50}
            />
            
            
            {/* Animated text */}
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <Center>
                    <Text3D 
                        ref={textRef}
                        font="./fonts/luckiest_guy.json"
                        size={1.5}
                        height={0.4}
                        curveSegments={8}
                        bevelEnabled
                        bevelThickness={.1}
                        bevelSize={0.05}
                        bevelOffset={0}
                        bevelSegments={8}
                        position={[0, 3, 0]}
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
            
            {/* <group position={[0, -2, 0]}>

                <Pig 
                    position={[-3, 0, 0]} 
                    scale={1}
                    rotation={[0, Math.PI / 8, 0]} 
                />

                <Pig 
                    position={[3, 0, 0]} 
                    scale={1}
                    rotation={[0, -Math.PI / 8, 0]} 
                />

                <Pig 
                    position={[0, 0, 0]} 
                    scale={1}
                    rotation={[0, 0, 0]} 
                />

            </group> */}

            <group>
                <House
                    path={ "/models/stone_house.glb" }
                    houseScale={ 1.5 }
                    housePosition={ [-2, 0, 0] }
                    rotation={ [0, 0, 0] }
                    pigScale={ 0.5 }
                    pigPosition={ [-3.3, -1, 0.5] }
                />
            </group>

            <mesh
                rotation={[ -Math.PI * 0.5, 0, -Math.PI * 0.2 ]}
                position={[ 0, -3, 0 ]}
            >
                <planeGeometry args={ [100, 100] } />
                <meshStandardMaterial color={ "green" } />
            </mesh>
        </>
    )
}