import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import User from '../dashboard/user';


const router = createBrowserRouter([
  {
    path: '/',
    element: <div>navigate to /user</div>,
  },
  {
    path: '/user',
    element:<div><User/></div>,
  },
 
]);

export const RoutesApp = () => {
  return <RouterProvider router={router} />;
};
