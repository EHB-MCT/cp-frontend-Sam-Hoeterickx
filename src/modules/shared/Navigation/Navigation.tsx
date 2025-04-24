import { NavLink } from "react-router"

export const Navigation = () => {
    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/makingOf">Making Of</NavLink>
            <NavLink to="/all-fairy-tales">Explore</NavLink>
            <NavLink to="/fairytale">Fairytale</NavLink>
        </nav>
    )
}