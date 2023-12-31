import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";


const Body=  ()=> {
 const [listOfRestaurants,setListOfRestaurant]=useState([]);
 const [searchText,setSearchText] =useState(""); 
 const [filteredRestaurant,setFilteredRestaurant] =useState([]);
   useEffect(()=>{
    fetchData();
   },[])

   const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.572588&lng=77.273265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //Optional chaining
    setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }
   
   // show online status
   const onlineStatus = useOnlineStatus();
   if (onlineStatus === false) return <h1>Looks like you have internet issue</h1>;


   //Conditional rendering
    return listOfRestaurants.length === 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={()=>{
                        const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText));
                        setFilteredRestaurant(filteredRestaurant);

                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating > 4.0);
                    setListOfRestaurant(filteredList)
                }}>Top rated Restaurants</button>
            </div>
            <div className="res-container">
                
               {filteredRestaurant.map((restaurant)=>(
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                    <RestaurantCard  resData={restaurant}/>
                </Link>
               ))} 
            </div>
        </div>
    )
};

export default Body;