import { FC } from "react"
import { NavLink } from "react-router"

//Types
import { WidgetType } from "../../../../../shared/const/Types/WidgetType"

    export const Widget: FC<WidgetType> = ({ id, image, title, theme, student }) => {
    return (
        <div className="widget" id={ id }>
            <div className="widget--image-wrapper">
                <img src={image} alt={`picture of fairytale: ${title}`} />
            </div>
            <div className="widget--info">
                <div className="widget--info--wrapper">
                    <h4>{ student }</h4>
                    <p>{ title }</p>
                    <p>{ theme }</p>
                </div>
                <NavLink to={`/making-of/${id}`}>
                    →
                </NavLink>
            </div>

        </div>
    )
}