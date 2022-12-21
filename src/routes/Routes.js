import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Layout1 from "../pages/Layout1/Layout1";
import Layout2 from "../pages/Layout2/Layout2";
import Layout3 from "../pages/Layout3/Layout3";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Layout1 />
            },
            {
                path: '/layout2',
                element: <Layout2 />
            },
            {
                path: '/layout3',
                element: <Layout3 />
            }
        ]
    }
]);

export default router;