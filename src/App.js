import React, { lazy, Suspense } from "react";
import "./index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
// import Grocery from "./Components/Grocery";
// import { Home } from "./Components/Home";

// not using keys(not acceptable)<<<<< index as key<<<<< unique id (best practice)

const Grocery = lazy(()=>import("./Components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

//aksay concept
const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout />,
    children : [
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/Home",
      element: <RestaurantMenu />,
    },
   
    {
      path:"/",
      element:<Body />

    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/Grocery",
      element: <Suspense fallback={<h1>Loading....</h1>}>
               <Grocery />,
               </Suspense>
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />
    }
    ],
    errorElement: <Error />,
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <RouterProvider  router={appRouter}/>
);
 
export default AppLayout;



