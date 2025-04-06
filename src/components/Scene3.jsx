import { OrbitControls } from "@react-three/drei"

//Components
import House from "./House.jsx"

const Scene3 = () => {
    return(
        <>
            <OrbitControls />

            <House
                path={ "../../public/models/straw_house.glb" }
                houseScale={ 1.5 }
                housePosition={ [0, 0, -1] }
                houseRotation={ [0, 0, 0] }
                pigScale={ 0.5 }
                pigPosition={ [0, -1, 0.4] }
                pigRotation={ [0, 0, 0] }
            />
            <House
                path={ "../../public/models/wooden_house.glb" }
                houseScale={ 1.5 }
                housePosition={ [-3.3, 0, 0] }
                houseRotation={ [0, Math.PI * 0.25, 0] }
                pigScale={ 0.5 }
                pigPosition={ [-3, -1, 1.4] }
                pigRotation={ [0, Math.PI * 0.25, 0] }
            />
            <House
                path={ "../../public/models/stone_house.glb" }
                houseScale={ 1.5 }
                housePosition={ [3.3, 0, 0] }
                houseRotation={ [0, - Math.PI * 0.25, 0] }
                pigScale={ 0.5 }
                pigPosition={ [3, -1, 1.4] }
                pigRotation={ [0, - Math.PI * 0.25, 0] }
            />
        </>
    )
}

export default Scene3