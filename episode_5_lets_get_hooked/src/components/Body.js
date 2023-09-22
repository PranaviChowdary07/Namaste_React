import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utilis/mockData";

const Body=  ()=> {
   const [listOfRestaurants,setListOfRestaurant]=useState(resList);

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