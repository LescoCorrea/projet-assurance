import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Propos from './Pages/Propos';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Portofolio from './Pages/Portofolio';
import Team from './Pages/Team';
import Portofolios from './Pages/Portofolios';
import Blog from './Pages/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "propos",
    element: <Propos />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "portofolio",
    element: <Portofolio />,
  },
  {
    path: "portofolios",
    element: <Portofolios />,
  },
  {
    path: "team",
    element: <Team />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


