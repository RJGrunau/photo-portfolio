import * as React from 'react';
import {render} from    "react-dom";
import {
    createBrowserRouter,
    Route,
    RouterProvider
} from 'react-router-dom';
import { GraphQLClient, ClientContext } from 'graphql-hooks';

const client = new GraphQLClient({
    url: "https://graphql.datocms.com/",
    headers: {
        "Authorization": `Bearer ${process.env.DATO_API_TOKEN}`
    }
})

import HomePage from "./HomePage/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    }
]);
const App = () => (
    <ClientContext.Provider value={client}>

        <RouterProvider router={router}/>
    </ClientContext.Provider>
)

render(<App/>, document.getElementById('app'));