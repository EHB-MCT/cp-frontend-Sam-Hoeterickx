const Lights = ({ position, intensity}) => {

    return(
        <>
            <ambientLight intensity={ 0.5 } />
            <directionalLight position={ position } intensity={ intensity } />
        </>
    )
}
export default Lights