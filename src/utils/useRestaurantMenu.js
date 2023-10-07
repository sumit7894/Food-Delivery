import { useEffect,useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) =>{
    const [resInfo,setResInfo] = useState(null);

    //fetch the data
    useEffect(()=>{
        fetchData();
    },[]); // we want to fetch the data once so writing [] once

    const fetchData = async () =>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
};

export default useRestaurantMenu;