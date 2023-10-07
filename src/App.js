 import React, { Suspense, lazy } from "react";
 import ReactDOM from "react-dom/client";
 import Header from "./component/Header";
 import Body from "./component/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";


//chunking
//code splitting
//dynamic bundling
//Lazy loading

const Grocery = lazy(()=>import("./component/Grocery"));

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}
 const heading = React.createElement("h1",{id:"heading"},"Namaste React 🦗");


 const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>loading .... </h1>}><Grocery/> </Suspense>,
            },
        ],
        errorElement:<Error/>,
    },
 ])

 const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router = {appRouter}/>);