import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body =()=>{

const [listOfRestaurant, setListOfRestaurant] = useState([]);
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
      setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  console.log("body re-rendered");
  //Conditional Rendering(Rendering based on the condition)
    return listOfRestaurant.length === 0? <Shimmer/> : (
       <div className="body">
        <div className="filter">
        <div className="search">
          <input type="text" className="search-box"
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
          />
          <button
          onClick={()=>{
            console.log(searchText);

            const filteredRestaurant = listOfRestaurant.filter((res)=>
              res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
            setFilteredRestaurant(filteredRestaurant);
            console.log(filteredRestaurant);
          }}
          >Search </button> 
        </div>
          <button className="filter-btn" 
          onClick={()=>{
            const filteredList = listOfRestaurant.filter((res)=> res.info.avgRating > 4)
            setListOfRestaurant(filteredList);
          }}> Top Rated Restaurant</button>
          </div>
        <div className="res-container">
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