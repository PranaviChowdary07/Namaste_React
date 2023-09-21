import RestaurantCard from "./RestaurantCard";
//import resList from "../utilis/mockData";

const Body=  ()=> {
    let listOfRestaurants = [{
        "info":{
            "num":"1",
    "id": "428",
    "name": "Biryani",
    "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "North Indian", 
    "Biryani"
    ],
    "avgRating": 3.0,
        }
    },
   {
        "info":{
            "num":"2",
    "id": "427",
    "name": "Biryani Pot",
    "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "North Indian",
    "Biryani"
    ],
    "avgRating": 4.7,
        }
    }
    ];
  
    return (
        <div className="body">
            {/* <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    resList = resList.filter((res)=>res.info.avgRating > 4.5);
                    console.log(resList); 
                }}>Top rated Restaurants</button>
            </div> */}
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    listOfRestaurants = listOfRestaurants.filter((res)=> res.info.avgRating > 4.5);
                    console.log(listOfRestaurants); 
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