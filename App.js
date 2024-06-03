import React from "react";
import ReactDOM from "react-dom/client";

/*
*Header
* - Logo
* - Nav Items
*Body
* - Search
* - ReastaurantContainer
* - - RestaurantCard
* Footer
* -Copyright
* -Links
* -Address
* -Contact 
*/
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
              <img className="logo" src="https://tse4.mm.bing.net/th?id=OIP.8kuEBgMkksdxISAbhul21QHaFT&pid=Api&P=0&h=180" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return(
        <div className="res-card">
            <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552" />
           <h3>Meghana Food</h3>
           <h4>Biryani, North Indian, Asian</h4>
           <h4>4.4 Stars</h4>
           <h4>38 Minutes</h4>
        </div>
    )
}
const Body = () => {
    return(
        <div className="body">
            <div className="search-container">
                <input className="search-input" type="text" />
                <button className="search-btn">Search</button>
            </div>
            <div className="restaurant-container">
                  <RestaurantCard />
                  <RestaurantCard />
                  <RestaurantCard />
                  <RestaurantCard />
                  <RestaurantCard />
                  <RestaurantCard /> 
            </div>
        </div>
    )
}
const AppLayout = () => {
    return(
        <div className="app">
             <Header />
             <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)