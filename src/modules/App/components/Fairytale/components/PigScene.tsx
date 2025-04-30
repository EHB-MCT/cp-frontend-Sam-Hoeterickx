import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

//Components
import Pig from "./Pig";
import Prop from './Prop';

const PigScene = ({ mousePosition }) => {

    const smoothMousePosition = useRef({ x: 0, y: 0 });


    useFrame(() => {
        // Smoothly interpolate the mouse position
        smoothMousePosition.current.x += (mousePosition.x - smoothMousePosition.current.x) * 0.1;
        smoothMousePosition.current.y += (mousePosition.y - smoothMousePosition.current.y) * 0.1;
    })

    return (
        <>
            <Pig 
                scale={ 1.2 }
                position={[
                    4.05 - smoothMousePosition.current.x * 0.45,
                    -2.0 + smoothMousePosition.current.y * 0.45, 
                    0]}
                rotation={[0, - Math.PI * 0.25, 0]}
            />
            <Pig 
                scale={ 1.0 }
                position={[
                    5.5 - smoothMousePosition.current.x * 0.45, 
                    -0.5 + smoothMousePosition.current.y * 0.45, 
                    -2]}
                rotation={[0, - Math.PI * 0.25, 0]}
            />
            <Pig 
                scale={ 1.0 }
                position={[
                    7 - smoothMousePosition.current.x * 0.45, 
                    -1.75 + smoothMousePosition.current.y * 0.45,
                    -1]}
                rotation={[0, - Math.PI * 0.25, 0]}
            />

            <Prop
                path={"../../public/models/stylized_stones_props.glb"}
                scale={ 4.75 }
                position={[
                    -9.5 - smoothMousePosition.current.x * 0.45,
                    -5.5 + smoothMousePosition.current.y * 0.45, 
                    -3]}
                rotation={[0, - Math.PI * 0.4, 0]}
            />
            <Prop
                path={"../../public/models/wooden_prop.glb"}
                scale={ 0.75 }
                position={[
                    -4 - smoothMousePosition.current.x * 0.45,
                    -3.0 + smoothMousePosition.current.y * 0.45, 
                    -1]}
                rotation={[- Math.PI * 0.65, Math.PI * 0.5, 0]}
            />
            <Prop
                path={"../../public/models/wooden_prop.glb"}
                scale={ 1.40 }
                position={[
                    -4 - smoothMousePosition.current.x * 0.45,
                    -4 + smoothMousePosition.current.y * 0.45, 
                    -3]}
                rotation={[- Math.PI * 0.45, 0, - Math.PI * 0.8]}
            />
        </>
    )
}

export default PigScene;