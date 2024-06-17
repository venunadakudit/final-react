import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
 import resList from "../utils/mockData";

// let [ownRestList, setownRestList] = useState([ownRestList]);

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  
  useEffect(() => {
     fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
     const json = await data.json();
    
     console.log(json);
    //  setListOfRestaurants(json.data.cards[2].data.data.cards);
  };

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
