import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
    return(
        <div className="body">
            <div className="search-container">
                <input className="search-input" type="text" />
                <button className="search-btn">Search</button>
            </div>
            <div className="restaurant-container">
                   
                   {
                    resList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                   }
                   
                  

            </div>
        </div>
    )
}

export default Body;