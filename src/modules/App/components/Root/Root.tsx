import { createBrowserRouter, RouterProvider } from "react-router"
import { App } from "../App"

export const Root = () => {

    const ROUTE = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/home',
                    element: <div>Home</div>
                },
                {
                    path:'*',
                    element: <div>404</div>
                }
            ]
        }
    ])

    return (
        <RouterProvider router={ROUTE} />
    )
}