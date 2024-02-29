import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Root, ErrorPage, Home, Alignment, Contact, Posts,  PostIndex, Post } from './routes/routes';

import { loader as alignmentLoader, action as alignmentAction, } from './routes/Alignment';
import { loader as postsLoader } from './routes/PostIndex';
import { loader as postLoader } from './routes/Post';

export const network = 'http://127.0.0.1:5000';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'alignment',
        element: <Alignment />,
        loader: alignmentLoader,
        action: alignmentAction,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'posts',
        element: <Posts />,
        errorElement: <ErrorPage />,
        loader: postsLoader,
        children: [
          {
            index: true,
            element: <PostIndex />,
            loader: postsLoader,
          },
          {
            path: ':postId',
            element: <Post />,
            errorElement: <ErrorPage />,
            loader: postLoader,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// import reportWebVitals from './reportWebVitals';
// reportWebVitals(console.log);