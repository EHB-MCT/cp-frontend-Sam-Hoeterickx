import * as THREE from "three"
import { PerspectiveCamera } from "@react-three/drei"
import gsap from "gsap"
import { useRef, useEffect, FC } from "react"

//Models
import { Hill } from "../models/Hill.model"
import { House } from "../models/House.model"
import { Pig } from "../models/Pig.model"
import { Text } from "../Text"

//Type
interface WinningSceneProps {
    //
}

const WinningScene: FC<WinningSceneProps> = () => {    
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
    
    
    return(
        <>
            <PerspectiveCamera 
                makeDefault
                position={[0, 0, 5]}
            />
            
            <Text
                text="You win!"
            />
            
            <group 
                name="Pigs"
                position={[ 0, -.705, 1 ]}
            >
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
                path="./models/stone_house.glb"
                scale={ 1 }
                position={[ 0, -0.04, 0 ]}
                rotation={[ 0, Math.PI * 0.1, 0 ]}
            />

            <mesh
                rotation={[ -Math.PI * 0.5, 0, -Math.PI * 0.2 ]}
                position={[ 0, -1, 0 ]}
            >
                <planeGeometry args={ [100, 100] } />
                <meshStandardMaterial color={ "green" } />
            </mesh>

            <group name="Hills">
                <Hill
                    scale={ 5 }
                    position={[ -35, 1, -25]}
                    rotation={[ 0, 0, 0 ]}
                />
                <Hill
                    scale={ 7 }
                    position={[ -24, 2, -45]}
                    rotation={[ 0, Math.PI * 0.1, 0 ]}
                />
                <Hill
                    scale={ 4 }
                    position={[ -18.5, .7, -55]}
                    rotation={[ 0, -Math.PI * 0.7, 0 ]}
                />

                <Hill
                    scale={ 12 }
                    position={[ 0, 4, -100]}
                    rotation={[ 0, Math.PI * 0.4, 0 ]}
                />  

                <Hill
                    scale={ 8 }
                    position={[ 18.5, 2.5, -55]}
                    rotation={[ 0, -Math.PI * 0.7, 0 ]}
                />

                <Hill
                    scale={ 10 }
                    position={[ 20, 3, -45]}
                    rotation={[ 0, Math.PI * 0.7, 0 ]}
                />  

                <Hill
                    scale={ 8 }
                    position={[ 50, 2.25, -45]}
                    rotation={[ 0, Math.PI * 0.7, 0 ]}
                />  
            </group>
        </>
    )
}

export default WinningScene