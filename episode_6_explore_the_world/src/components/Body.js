import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utilis/mockData";

const Body=  ()=> {
 const [listOfRestaurants,setListOfRestaurant]=useState(resList);
   useEffect(()=>{
    fetchData();
   },[])

   const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.572588&lng=77.273265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
   }
   
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating > 4.0);
                    setListOfRestaurant(filteredList)
                }}>Top rated Restaurants</button>
            </div>
            <div className="res-container">
                
               {listOfRestaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.num} resData={restaurant}/>
               ))} 
            </div>
        </div>
    )
};

export default Body;