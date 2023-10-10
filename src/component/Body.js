import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { list } from "postcss";
const Body =()=>{

let [listOfRestaurant, setListOfRestaurant] = useState([]);
const [filteredRestaurant,setFilteredRestaurant] = useState([]);
const [searchText,setSearchText] = useState("");
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3458062&lng=82.9884584&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
      const json = await data.json();
      console.log(json);
      //Optional chainging
      setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) || {};
      setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) || {};
  };

      const onlineStatus = useOnlineStatus();

      if(onlineStatus ===false){
        return (
          <h1>
            Looks like you are offline. Please check your Internet Connection!!
          </h1>
        )
      };
      
    return listOfRestaurant.length === 0 ? (<Shimmer/>) :  (
       <div className="body">
        <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black"
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
          />
          <button className="search px-4 py-2 m-4 bg-green-400 rounded-xl"
          onClick={()=>{
            const filteredRestaurant = listOfRestaurant.filter((res)=>
              res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
              setFilteredRestaurant(filteredRestaurant);
          }}
          >Search </button> 
        </div>
          <div>
          <button className="search px-4 py-2 bg-gray-100 flex items-center"
          onClick={()=>{
            const filteredList = listOfRestaurant.filter((res)=> res.info.avgRating > 4)
            setListOfRestaurant(filteredList);
          }}> Top Rated Restaurant</button>
          </div>
          </div>
        <div className="card-container flex flex-wrap">
            {
                filteredRestaurant.map((restaurant)=>( 
                    <Link to={"restaurants/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant}/> </Link>
                ))
            }
        </div>
       </div> 
    )
}
export default Body;