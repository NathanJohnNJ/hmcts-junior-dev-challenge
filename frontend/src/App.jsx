import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from './pages/home';
import Tasks from './pages/tasks';
import Root from './pages/root';

export default function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={ <Home /> } />
      <Route path="/tasks" element={ <Tasks />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}
