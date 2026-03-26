import { createBrowserRouter } from "react-router-dom";
import { Home } from "./views/Home";
import { Movies } from "./views/movies/Movies";
import { RouteLayout } from "./views/RouteLayout";
import { MovieDetail } from "./views/movieDetail/MovieDetail";

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
            },
            {
                path: "/movies/:id",
                element: <MovieDetail />
            }
        ]
    }
])