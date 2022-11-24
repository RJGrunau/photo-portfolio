import {render} from    "react-dom";
import { Global, css } from '@emotion/react';
import {
    createBrowserRouter,
    Route,
    RouterProvider
} from 'react-router-dom';
import { GraphQLClient, ClientContext } from 'graphql-hooks';

const style = {
    global: css`
        /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background: #FFF;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

nav a {
    text-decoration: none;
    color: black;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
    `
};

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
      "Authorization": `Bearer ${process.env.DATO_API_TOKEN}`
  }
});

import HomePage from "./HomePage/HomePage";
import Newletter from "./Newsletter/Newsletter";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/newsletter",
        element: <Newletter/>
    }

]);
const App = () => (
    <ClientContext.Provider value={client}>
        <RouterProvider router={router}/>
    </ClientContext.Provider>
)

render(<App/>, document.getElementById('app'));