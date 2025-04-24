import { createBrowserRouter, RouterProvider } from "react-router"

//Components
import { App } from "../App";
import { Error } from "../../../shared/Error";

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
                    element: <div>Home</div>
                },

            ]
        }
    ])

    return (
        <RouterProvider router={ROUTE} />
    )
}