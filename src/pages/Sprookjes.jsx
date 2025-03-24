import FairyTaleCart from "../components/FairyTaleCart"

const Sprookjes = () => {
    return (
        <>
            <h1>Sprookjes</h1>
            <FairyTaleCart 
                image_url={"sprookje.jpg"}
                name={"Sneeuwwitje"}
                student={"John Doe"}
            />
        </>
    )
}

export default Sprookjes