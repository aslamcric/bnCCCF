import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
// layouts 

// public pages 

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about-us',
                element: < AboutUs />
            }
        ]
    },

])