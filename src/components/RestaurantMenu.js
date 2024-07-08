import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=45767&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  
  // if(resInfo == null) return <Shimmer />
  // (or)
  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
