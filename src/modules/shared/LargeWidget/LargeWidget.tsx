import { FC } from "react"

//Types
import { WidgetType } from "../../Types/WidgetType"

export const LargeWidget: FC<WidgetType> = ({ id, title, description, image }) => {
    return (
        <div id={ id }>
            <img src={image} alt={`picture of fairytale: ${title}`} />
            <h2>{ title }</h2>
            <p>{ description }</p>
        </div>
    )
}