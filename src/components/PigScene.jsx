import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

//Components
import Pig from "./Pig.jsx";
import Prop from './Prop.jsx';

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
                    3.55 - smoothMousePosition.current.x * 0.45,
                    -2.0 + smoothMousePosition.current.y * 0.45, 
                    0]}
                rotation={[0, - Math.PI * 0.25, 0]}
            />
            <Pig 
                scale={ 1.0 }
                position={[
                    4.55 - smoothMousePosition.current.x * 0.45, 
                    -0.5 + smoothMousePosition.current.y * 0.45, 
                    -0.3]}
                rotation={[0, - Math.PI * 0.25, 0]}
            />
            <Pig 
                scale={ 1.0 }
                position={[
                    5.5 - smoothMousePosition.current.x * 0.45, 
                    -1.75 + smoothMousePosition.current.y * 0.45,
                    .2]}
                rotation={[0, - Math.PI * 0.25, 0]}
            />

            <Prop
                path={"../../public/models/stylized_stones_props.glb"}
                scale={ 2.75 }
                position={[
                    -6 - smoothMousePosition.current.x * 0.45,
                    -3.2 + smoothMousePosition.current.y * 0.45, 
                    0]}
                rotation={[0, - Math.PI * 0.4, 0]}
            />
        </>
    )
}

export default PigScene;