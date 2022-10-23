import * as React from 'react';
import {render} from    "react-dom";
import {
    createBrowserRouter,
    Route,
    RouterProvider
} from 'react-router-dom';

import HomePage from "./HomePage/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    }
]);
const App = () => <RouterProvider router={router}/>

render(<App/>, document.getElementById('app'));