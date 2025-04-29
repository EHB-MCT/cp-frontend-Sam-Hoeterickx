import House from "./House";

const Scene4 = ( { selectedPig } ) => {

    let path;
    if(selectedPig === null){
        path = "../../public/models/wooden_house.glb";
    }else if(selectedPig === "wooden"){
        path = "../../public/models/wooden_house.glb";
    }else if(selectedPig === "straw"){
        path = "../../public/models/straw_house.glb";
    }else if(selectedPig === "stone"){
        path = "../../public/models/stone_house.glb";
    }

    return(
        <>
            <House
                path={ path }
                houseScale={1.5}
                housePosition={[0, 0, -1]}
                rotation={[0, 0, 0]}
                pigScale={0.5}
                pigPosition={[0.3, -1, 0.4]}
            />
        </>
    )
}
export default Scene4