import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Center } from '@react-three/drei'
import Cloud from './Cloud.jsx'
import Text from './Text.jsx'

const CloudScene = ({ mousePosition }) => {
    const smoothMousePosition = useRef({ x: 0, y: 0 })

    useFrame(() => {
        // Smoothly interpolate the mouse position
        smoothMousePosition.current.x += (mousePosition.x - smoothMousePosition.current.x) * 0.1
        smoothMousePosition.current.y += (mousePosition.y - smoothMousePosition.current.y) * 0.1
    })

    return (
        <>
            <Cloud
                scale={1.5}
                position={[
                    -5.75 - smoothMousePosition.current.x * 0.45,
                    -1.55 - smoothMousePosition.current.y * 0.45,
                    -1,
                ]}
                rotation={[0, Math.PI * 0.05, 0]}
            />
            <Cloud
                scale={1}
                position={[
                    5 - smoothMousePosition.current.x * 0.45,
                    2 - smoothMousePosition.current.y * 0.45,
                    0,
                ]}
                rotation={[0, -Math.PI * 0.3, 0]}
            />
            <Cloud
                scale={2}
                position={[
                    -6 - smoothMousePosition.current.x * 0.45,
                    4.5 - smoothMousePosition.current.y * 0.45,
                    -4,
                ]}
            />
            <Cloud
                scale={4}
                position={[
                    4.25 - smoothMousePosition.current.x * 0.45,
                    -8 - smoothMousePosition.current.y * 0.45,
                    -6,
                ]}
            />

            <Center>
                <Center>
                    <Text 
                        text="Once upon a time"
                        position={[0, 1, 0]}
                    />
                </Center>
                <Center>
                    <Text 
                        text="three little pigs"
                        position={[0, 0, 0]}
                    />
                </Center>
                <Center>
                    <Text 
                        text="lived in a house"
                        position={[0, -1, 0]}
                    />
                </Center>
                
            </Center>
        </>
    )
}

export default CloudScene