import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
//import { useParams } from "react-router-dom";
//import {MENU_API} from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
 
  //const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=658841&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json(); 
    setResInfo(json.data);
  };
  
  if (resInfo === null) return <Shimmer />;
 
   
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage} </p>
       
      <ul>
        {itemCards.map((item) => <li key={item.card.info.id}>
          {item.card.info.name} - {"Rs."}
          {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</li>)} 
        {/* <li>{itemCards[0]?.card?.info?.name}</li>
        <li>{itemCards[1]?.card?.info?.name}</li>
        <li>{itemCards[2]?.card?.info?.name}</li> */}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
