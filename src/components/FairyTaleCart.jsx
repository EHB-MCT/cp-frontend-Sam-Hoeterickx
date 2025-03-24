const FairyTaleCart = ({image_url, name, student}) => {
    return (
        <div className="fairy-tale-cart">
            <img src={image_url} alt="" />
            <div className="fairy-tale-info">
                <h2>{name}</h2>
                <h3>{student}</h3>
            </div>
        </div>
    )
}

export default FairyTaleCart