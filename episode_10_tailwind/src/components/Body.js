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
    <div className = "body">
        <div classNam = "flex">
            <div className =" m-4 p-4">
                <input type ="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }} />
                <button className ="px-2 py-1 bg-green-100 m-4 rounded-lg"
                onClick={()=>{
                    //search text
                    const filteredRestaurant = listOfRestaurants.filter((res)=>res?.info?.name.toLowerCase().includes(searchText));
                    setFilteredRestaurant(filteredRestaurant);

                }}>Search</button>
            </div>
         <div className="m-4 p-2 flex-items-center">
            <button className = "px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                //top rated restaurant text
                const filteredList = listOfRestaurants.filter((res)=> res?.info?.avgRating > 4.0);
                setListOfRestaurant(filteredList)
            }}>Top rated Restaurants</button>
         </div>

        </div>

        <div className  = " flex flex-wrap">
           {filteredRestaurant.map((restaurant)=>(
            <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant.info.id}>
                <RestaurantCard  resData={restaurant}/>
            </Link>
           ))} 
        </div>
    </div>
)
};

export default Body;