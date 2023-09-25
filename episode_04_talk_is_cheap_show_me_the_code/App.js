
import React from "react";
import  ReactDOM  from "react-dom/client";

/**
 * Header
 *  -logo
 *  -nav items
 * Body
 *  -Search
 *  -Reastuarant container
 *    -reastaurant card
 * Footer
 *  -copyright
 *  -links
 *  -Address
 *  -contact
 */

const Header =()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJWWztAJJh5sg60JLi4SPRNR75k2zj0ngtSA&usqp=CAU"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )  
}

const RestaurantCard =(props)=>{
    const {resData} = props;
    const {cloudinaryImageId,name,deliveryTime,avgRating,costForTwo,cuisines}=resData?.info;
    return (
        <div className="res-card"  style={{backgroundColor:"#f0f0f0"}}>
            <img  className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

const resList = [{

        "info": {
            "num":"1",
        "id": "428",
        "name": "Biryani Pot",
        "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
        "locality": "Maruti Nagar",
        "areaName": "Btm Layout",
        "costForTwo": "₹500 for two",
        "cuisines": [
        "North Indian",
        "Biryani"
        ],
        "avgRating": 3.9,
        "restaurantId": "428",
        "avgRatingString": "3.9",
        "totalRatingsString": "10K+",
        "deliveryTime": 41, 
        }
        
},
{

    "info": {
        "num":"2",
    "id": "428",
    "name": "Biryani Pot",
    "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
    "locality": "Maruti Nagar",
    "areaName": "Btm Layout",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "North Indian",
    "Biryani"
    ],
    "avgRating": 3.9,
    "restaurantId": "428",
    "avgRatingString": "3.9",
    "totalRatingsString": "10K+",
    "deliveryTime": 41, 
    }
    
},
{

    "info": {
        "num":"3",
    "id": "428",
    "name": "Biryani Pot",
    "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
    "locality": "Maruti Nagar",
    "areaName": "Btm Layout",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "North Indian",
    "Biryani"
    ],
    "avgRating": 3.9,
    "restaurantId": "428",
    "avgRatingString": "3.9",
    "totalRatingsString": "10K+",
    "deliveryTime": 41, 
    }
    
},
{

    "info": {
        "num":"4",
    "id": "428",
    "name": "Biryani Pot",
    "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
    "locality": "Maruti Nagar",
    "areaName": "Btm Layout",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "North Indian",
    "Biryani"
    ],
    "avgRating": 3.9,
    "restaurantId": "428",
    "avgRatingString": "3.9",
    "totalRatingsString": "10K+",
    "deliveryTime": 41, 
    }
    
},
{

    "info": {
        "num":"5",
    "id": "428",
    "name": "Biryani Pot",
    "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
    "locality": "Maruti Nagar",
    "areaName": "Btm Layout",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "North Indian",
    "Biryani"
    ],
    "avgRating": 3.9,
    "restaurantId": "428",
    "avgRatingString": "3.9",
    "totalRatingsString": "10K+",
    "deliveryTime": 41, 
    }
    
},
{

    "info": {
        "num":"6",
    "id": "428",
    "name": "Biryani Pot",
    "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
    "locality": "Maruti Nagar",
    "areaName": "Btm Layout",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "North Indian",
    "Biryani"
    ],
    "avgRating": 3.9,
    "restaurantId": "428",
    "avgRatingString": "3.9",
    "totalRatingsString": "10K+",
    "deliveryTime": 41, 
    }
    
},
{

    "info": {
        "num":"7",
    "id": "428",
    "name": "Biryani Pot",
    "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
    "locality": "Maruti Nagar",
    "areaName": "Btm Layout",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "North Indian",
    "Biryani"
    ],
    "avgRating": 3.9,
    "restaurantId": "428",
    "avgRatingString": "3.9",
    "totalRatingsString": "10K+",
    "deliveryTime": 41, 
    }
    
},
{

    "info": {
        "num":"8",
    "id": "428",
    "name": "Biryani Pot",
    "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
    "locality": "Maruti Nagar",
    "areaName": "Btm Layout",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "North Indian",
    "Biryani"
    ],
    "avgRating": 3.9,
    "restaurantId": "428",
    "avgRatingString": "3.9",
    "totalRatingsString": "10K+",
    "deliveryTime": 41, 
    }
    
},
{

    "info": {
        "num":"9",
    "id": "428",
    "name": "Biryani Pot",
    "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
    "locality": "Maruti Nagar",
    "areaName": "Btm Layout",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "North Indian",
    "Biryani"
    ],
    "avgRating": 3.9,
    "restaurantId": "428",
    "avgRatingString": "3.9",
    "totalRatingsString": "10K+",
    "deliveryTime": 41, 
    }
    
},
{

    "info": {
        "num":"10",
    "id": "428",
    "name": "Biryani Pot",
    "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
    "locality": "Maruti Nagar",
    "areaName": "Btm Layout",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "North Indian",
    "Biryani"
    ],
    "avgRating": 3.9,
    "restaurantId": "428",
    "avgRatingString": "3.9",
    "totalRatingsString": "10K+",
    "deliveryTime": 41, 
    }
    
},
{

    "info": {
        "num":"11",
    "id": "428",
    "name": "Biryani Pot",
    "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
    "locality": "Maruti Nagar",
    "areaName": "Btm Layout",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "North Indian",
    "Biryani"
    ],
    "avgRating": 3.9,
    "restaurantId": "428",
    "avgRatingString": "3.9",
    "totalRatingsString": "10K+",
    "deliveryTime": 41, 
    }
    
},
{

    "info": {
        "num":"12",
    "id": "428",
    "name": "Biryani Pot",
    "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
    "locality": "Maruti Nagar",
    "areaName": "Btm Layout",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "North Indian",
    "Biryani"
    ],
    "avgRating": 3.9,
    "restaurantId": "428",
    "avgRatingString": "3.9",
    "totalRatingsString": "10K+",
    "deliveryTime": 41, 
    }
    
}
]

const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                
               {resList.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.num} resData={restaurant}/>
               ))} 
            </div>
        </div>
    )
}



const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>)