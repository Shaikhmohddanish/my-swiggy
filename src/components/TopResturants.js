import RestaurantCard from "./ResturantCard";
import {TOP_RESTAURANTS_NEAR_ME} from "../constant";
import "./search.css"
function TopRestaurants(){
    let searchValue = "";
    return (
        <>
        <div className="search">
            <input className="search-input" placeholder="Search restaurants" onChange={(event)=> {searchValue=event.target.value}} />
            <button className="search-button" onClick={()=>{console.log(searchValue)}}>Search</button>
        </div>
        <h1>Top Restaurants</h1>
        <div className="grid grid-cols-4 mx-2 my-4 gap-2" >
            {TOP_RESTAURANTS_NEAR_ME.map((restaurant)=>{
                return <RestaurantCard key={restaurant.info.id} {...restaurant}/>
            })}
        </div>
        </>
    );

}

export default TopRestaurants;