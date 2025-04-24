import { createBrowserRouter, RouterProvider } from "react-router"

//Routes
import { ALL_FAIRY_TALES_ROUTE } from "../AllFairyTales/allFairyTales.route";
import { ERROR_ROUTE } from "../../../shared/Error/error.route";
import { FAIRY_TALE_ROUTE } from "../Fairytale/fairytale.route";
import { HOME_ROUTE } from "../../Home/home.route";
import { MAKING_OF_ROUTE } from "../Makingof/makingOf.route";

//Components
import { App } from "../App";


export const Root = () => {

    const ROUTE = createBrowserRouter([
        {
            //ROUTES voor paginas met navigatie
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
                {
                    path: MAKING_OF_ROUTE.path,
                    element: MAKING_OF_ROUTE.element
                },
                {
                    path: ALL_FAIRY_TALES_ROUTE.path,
                    element: ALL_FAIRY_TALES_ROUTE.element
                },

            ]
        },
        {
            //ROUTE voor eigen fairytale zonder navigatie
            path: FAIRY_TALE_ROUTE.path,
            element: FAIRY_TALE_ROUTE.element
        }
    ])

    return (
        <RouterProvider router={ROUTE} />
    )
}