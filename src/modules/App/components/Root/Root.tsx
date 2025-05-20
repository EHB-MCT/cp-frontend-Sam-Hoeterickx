import { createHashRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//Routes
import { ABOUT_US_ROUTE } from "../AboutUs/about.route";
import { ERROR_ROUTE } from "../../../shared/Error/error.route";
import { EXPLORE_ROUTE } from "../Explore/explore.route";
import { FAIRY_TALE_ROUTE } from "../Fairytale/fairytale.route";
import { HOME_ROUTE } from "../Home/home.route";
import { MAKING_OF_ROUTE } from "../Makingof/makingOf.route";

//Components
import { App } from "../App";

//CSS
import '../../../../styles/main.scss'


export const Root = () => {
    const queryClient = new QueryClient();

    const ROUTE = createHashRouter([
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
                    path: ABOUT_US_ROUTE.path,
                    element: ABOUT_US_ROUTE.element
                },
                {
                    path: MAKING_OF_ROUTE.path,
                    element: MAKING_OF_ROUTE.element
                },
                {
                    path: HOME_ROUTE.path,
                    element: HOME_ROUTE.element
                },
                {
                    path: EXPLORE_ROUTE.path,
                    element: EXPLORE_ROUTE.element,
                }

            ]
        },
        {
            //ROUTE voor eigen fairytale zonder navigatie
            path: FAIRY_TALE_ROUTE.path,
            element: FAIRY_TALE_ROUTE.element
        }
    ])

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={ROUTE} />
        </QueryClientProvider>
        
    )
}