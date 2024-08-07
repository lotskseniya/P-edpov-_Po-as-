import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { Map } from './components/Map/Map';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Settings } from './components/Settings/Settings';
import { Cities } from './components/Cities/Cities';


const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "/cities", element: <Cities/> },
  { path: "/map", element: <Map/> },
  { path: "/settings", element: <Settings/> },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
