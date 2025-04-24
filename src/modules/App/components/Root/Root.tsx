import { createBrowserRouter, RouterProvider } from "react-router"

//Routes
import { ERROR_ROUTE } from "../../../shared/Error/error.route";
import { HOME_ROUTE } from "../../Home/home.route";


//Components
import { App } from "../App";

export const Root = () => {

    const ROUTE = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path:ERROR_ROUTE.path,
                    element: ERROR_ROUTE.element
                },
                {
                    path: HOME_ROUTE.path,
                    element: HOME_ROUTE.element
                },


            ]
        }
    ])

    return (
        <RouterProvider router={ROUTE} />
    )
}