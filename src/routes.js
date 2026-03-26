import { createBrowserRouter } from "react-router-dom";
import { Home } from "./views/Home";
import { Movies } from "./views/Movies";
import { RouteLayout } from "./views/RouteLayout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RouteLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/movies",
                element: <Movies />
            }
        ]
    }
])