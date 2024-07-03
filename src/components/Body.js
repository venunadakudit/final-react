import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; 
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); 
  const [searchText, setSearchText] = useState(""); 

  // Whenever state variable update, react triggers reconciliation cycle (re-render the component)
  console.log("Body Rendered");
  useEffect(() => {
     fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
     const json = await data.json();
    
     console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
     //Optional Chaining
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
  };

  // if(listOfRestaurants.length === 0){
  //   return <Shimmer />; 
  // }

  return listOfRestaurants.length === 0 ? <Shimmer /> : ( 
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} 
          onChange={(e) => {  
          setSearchText(e.target.value);
          }} 
          />
          <button className="search-btn"
          onClick={() => {
          //Filter the restaurant cards and update the UI
          // searchText
          console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
            setListOfRestaurants(filteredRestaurant);
          }}
          >Search</button>
        </div>
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
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
  