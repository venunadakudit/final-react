import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
 import resList from "../utils/mockData";

// let [ownRestList, setownRestList] = useState([ownRestList]);

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           const filterdList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filterdList); 
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
