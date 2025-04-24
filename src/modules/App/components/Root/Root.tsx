import { createBrowserRouter, RouterProvider } from "react-router"

//Components
import { App } from "../App";
import { Error } from "../../../shared/Error";
import { Home } from "../../Home";

export const Root = () => {

    const ROUTE = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path:'*',
                    element: <Error />
                },
                {
                    path: '/home',
                    element: <Home />
                },

            ]
        }
    ])

    return (
        <RouterProvider router={ROUTE} />
    )
}