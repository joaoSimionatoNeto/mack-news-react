import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./pages/feed";
import Communities from "./pages/communities";
import NewPost from "./pages/newPost";
import Login from './pages/login';
import Singup from './pages/singup';
import Home from './pages/home';
const router = createBrowserRouter([
  {
    path: "/feed/:community",
    element: <Feed/>
  },
  {
    path: "comunidades",
    element: <Communities/>
  },
  {
    path: "novoPost",
    element: <NewPost/>
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "singup",
    element: <Singup/>
  },
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
