 import React, { Suspense, lazy, useContext,useState,useEffect } from "react";
 import ReactDOM from "react-dom/client";
 import Header from "./component/Header";
 import Body from "./component/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import UserContext from "./utils/UserContext";

import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/Cart";



//chunking
//code splitting
//dynamic bundling
//Lazy loading

const Grocery = lazy(()=>import("./component/Grocery"));

const AppLayout=()=>{
    const [userName,setUserName] = useState();

useEffect(()=>{
    const data ={
        name : "sumit",
    };
    setUserName(data.name);
},[])
    return(
        <Provider store={appStore}>
        {/* //In context provider i'm passing setUserName so that i can update the user name from the input box which in the body component */}
        <UserContext.Provider value={{loggedInUser : userName,setUserName}}>    
            <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
        
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
            {
                path:"/cart",
                element:<Cart/>,
            },
        ],
        errorElement:<Error/>,
    },
 ])

 const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router = {appRouter}/>);