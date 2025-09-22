import RestaurantCard from "./ResturantCard";
import {TOP_RESTAURANTS_NEAR_ME} from "../constant";
import "./search.css"
import { useState } from "react";
function TopRestaurants(){

    const [topRestaurants,setTopRestaurants] = useState(TOP_RESTAURANTS_NEAR_ME);

    let searchValue = "";
    function handleSearch(){
        setTopRestaurants(TOP_RESTAURANTS_NEAR_ME.filter((restaurant)=>{
            return restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase());
        }));
    }
    return (
        <>
        <div className="search">
            <input className="search-input" placeholder="Search restaurants" onChange={(event)=> {searchValue=event.target.value}} />
            <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
        <h1>Top Restaurants</h1>
        <div className="grid grid-cols-4 mx-2 my-4 gap-2" >
            {topRestaurants.map((restaurant)=>{
                return <RestaurantCard key={restaurant.info.id} {...restaurant}/>
            })}
        </div>
        </>
    );

}

export default TopRestaurants;