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
                housePosition={ [0, 0, 0] }
                houseRotation={ [0, 0, 0] }
                pigScale={ 0.5 }
                pigPosition={ [0, 0, 0] }
                pigRotation={ [0, 0, 0] }
            />
            <House
                path={ "../../public/models/straw_house.glb" }
                houseScale={ 1.5 }
                housePosition={ [3, 0, 0] }
                houseRotation={ [0, 0, 0] }
                pigScale={ 0.5 }
                pigPosition={ [3, 0, 0] }
                pigRotation={ [0, 0, 0] }
            />
            <House
                path={ "../../public/models/straw_house.glb" }
                houseScale={ 1.5 }
                housePosition={ [-3, 0, 0] }
                houseRotation={ [0, 0, 0] }
                pigScale={ 0.5 }
                pigPosition={ [-3, 0, 0] }
                pigRotation={ [0, 0, 0] }
            />
        </>
    )
}

export default Scene3