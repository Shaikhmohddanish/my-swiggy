import RestaurantCard from "./ResturantCard";
import {TOP_RESTAURANTS_NEAR_ME} from "../constant";
function TopRestaurants(){
    return (
        <div className="grid grid-cols-4 mx-2 my-4 gap-2" >

            {TOP_RESTAURANTS_NEAR_ME.map((restaurant)=>{
                return <RestaurantCard {...restaurant}/>
            })}
        </div>
    );

}

export default TopRestaurants;