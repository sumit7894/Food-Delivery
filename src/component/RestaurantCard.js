import {CDN_URL} from "../utils/constants";
import {useState} from "react";

const RestaurantCard =(props)=>{

    const {resData} = props;
    const {name,cloudinaryImageId,cuisines,avgRating,costForTwo,sla} = resData?.info;
    return(
        <div className="m-4 p-4 w-60 bg-gray-200 hover:bg-gray-300">
            <img 
            className="res-logo"
            alt="res-logo"
            src={CDN_URL+cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;