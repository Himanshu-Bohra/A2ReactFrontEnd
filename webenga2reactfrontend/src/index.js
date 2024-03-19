import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DummyFunction from './dummyPage';
import {DateOnly, StartEndDate } from './APIQueryHandler';
import Tutorial from './usage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { MainForm } from './mainForm';
//import 'bootstrap-icons/font/bootstrap-icons.css';

// Router

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "",
        element: <DummyFunction />
      },
      {
        path: "form",
        element: <MainForm></MainForm>
      },
      {
        path: "usage",
        element: <Tutorial />,
      },
    ],
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
