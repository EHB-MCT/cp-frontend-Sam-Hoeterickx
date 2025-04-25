import { FC } from "react"

//Types
import { WidgetType } from "../.././../../../Types/WidgetType"

export const Widget: FC<WidgetType> = ({ id, title, theme, image }) => {
    return (
        <div id={ id }>
            <img src={image} alt={`picture of fairytale: ${title}`} />
            <h2>{ title }</h2>
            <p>{ theme }</p>
        </div>
    )
}