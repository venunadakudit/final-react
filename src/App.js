import React from "react";
import ReactDOM from "react-dom/client";

 
 

const RestaurantCard = (props) => { 
    const {resData} = props;
     const {cloudinaryImageId, name, cuisines, costForTwo, avgRating} = resData?.info;
    return(
        <div className="res-card">
            <img
             className="res-img"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
              }
            />
           <h3>{name}</h3>
           <h4>{cuisines.join('-')}</h4> 
           <h4>{avgRating} Stars</h4>  
           <h4>{costForTwo} </h4>   
        </div>
    )
}


const resList = [
    {
    info: {
    id: "491475",
    name: "Chinese Wok",
    cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
    locality: "Ameerpet",
    areaName: "Gachibowli",
    costForTwo: "₹250 for two",
    cuisines: [
    "Chinese",
    "Asian",
    "Tibetan",
    "Desserts"
    ],
    avgRating: 4.1,
    parentId: "61955",
    avgRatingString: "4.1",
    totalRatingsString: "1K+",
    sla: {
    deliveryTime: 24,
    lastMileTravel: 1.5,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "1.5 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-06-09 23:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹199"
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-2699c8f0-3f16-402c-8549-e360d9f79f6b"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/chinese-wok-ameerpet-gachibowli-hyderabad-491475",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "81962",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "SR Nagar",
    areaName: "SR Nagar",
    costForTwo: "₹350 for two",
    cuisines: [
    "Pizzas"
    ],
    avgRating: 3.9,
    parentId: "721",
    avgRatingString: "3.9",
    totalRatingsString: "10K+",
    sla: {
    deliveryTime: 31,
    lastMileTravel: 1.5,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "1.5 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-06-10 03:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹189"
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-2699c8f0-3f16-402c-8549-e360d9f79f6b"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/pizza-hut-sr-nagar-hyderabad-81962",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "128084",
    name: "UBQ by Barbeque Nation",
    cloudinaryImageId: "nnz4fwtwbgwkscikeqiv",
    locality: "ANR Center",
    areaName: "Banjara Hills",
    costForTwo: "₹300 for two",
    cuisines: [
    "North Indian",
    "Barbecue",
    "Biryani",
    "Kebabs",
    "Mughlai",
    "Desserts"
    ],
    avgRating: 4,
    parentId: "10804",
    avgRatingString: "4.0",
    totalRatingsString: "5K+",
    sla: {
    deliveryTime: 54,
    lastMileTravel: 3.7,
    serviceability: "SERVICEABLE",
    slaString: "50-55 mins",
    lastMileTravelString: "3.7 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-06-09 23:30:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "50% OFF",
    subHeader: "UPTO ₹100"
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-2699c8f0-3f16-402c-8549-e360d9f79f6b"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-anr-center-banjara-hills-hyderabad-128084",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "300363",
    name: "Barbeque Nation",
    cloudinaryImageId: "fb3b8wkhcnluea9hlshv",
    locality: "Banjara Hills",
    areaName: "Banjara Hills",
    costForTwo: "₹600 for two",
    cuisines: [
    "North Indian",
    "Barbecue",
    "Biryani",
    "Kebabs",
    "Mughlai",
    "Desserts"
    ],
    avgRating: 4,
    parentId: "2438",
    avgRatingString: "4.0",
    totalRatingsString: "1K+",
    sla: {
    deliveryTime: 61,
    lastMileTravel: 3.7,
    serviceability: "SERVICEABLE",
    slaString: "60-65 mins",
    lastMileTravelString: "3.7 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-06-09 23:30:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "50% OFF",
    subHeader: "UPTO ₹100"
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-2699c8f0-3f16-402c-8549-e360d9f79f6b"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/barbeque-nation-banjara-hills-hyderabad-300363",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "903189",
    name: "La Pino'z Pizza",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/8/27f64212-7c1f-4a47-bc60-c482afa79ae6_903189.jpg",
    locality: "Begumpet",
    areaName: "Kundanbagh Colony",
    costForTwo: "₹250 for two",
    cuisines: [
    "Pizzas",
    "Pastas",
    "Italian",
    "Desserts",
    "Beverages"
    ],
    parentId: "4961",
    avgRatingString: "NEW",
    sla: {
    deliveryTime: 33,
    lastMileTravel: 2.3,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "2.3 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-06-10 00:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    aggregatedDiscountInfoV2: { },
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-2699c8f0-3f16-402c-8549-e360d9f79f6b"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-begumpet-kundanbagh-colony-hyderabad-903189",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "56268",
    name: "The Belgian Waffle Co.",
    cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
    locality: "Next galleria mall",
    areaName: "Punjagutta",
    costForTwo: "₹200 for two",
    cuisines: [
    "Waffle",
    "Desserts",
    "Ice Cream",
    "Beverages"
    ],
    avgRating: 4.5,
    veg: true,
    parentId: "2233",
    avgRatingString: "4.5",
    totalRatingsString: "5K+",
    sla: {
    deliveryTime: 43,
    lastMileTravel: 1.6,
    serviceability: "SERVICEABLE",
    slaString: "40-45 mins",
    lastMileTravelString: "1.6 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-06-09 23:55:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    ]
    },
    isOpen: true,
    aggregatedDiscountInfoV2: { },
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "pureveg",
    imageId: "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-2699c8f0-3f16-402c-8549-e360d9f79f6b"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-next-galleria-mall-punjagutta-hyderabad-56268",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "218478",
    name: "Harsha Deluxe Mess",
    cloudinaryImageId: "inuylaqdob3hn6ydenmx",
    locality: "Ameerpet",
    areaName: "Ameerpet",
    costForTwo: "₹300 for two",
    cuisines: [
    "Indian",
    "South Indian",
    "Thalis"
    ],
    avgRating: 4.3,
    parentId: "19508",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
    deliveryTime: 25,
    lastMileTravel: 0.5,
    serviceability: "SERVICEABLE",
    slaString: "25-30 mins",
    lastMileTravelString: "0.5 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-06-09 16:30:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "₹100 OFF",
    subHeader: "ABOVE ₹299",
    discountTag: "FLAT DEAL"
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-2699c8f0-3f16-402c-8549-e360d9f79f6b"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/harsha-deluxe-mess-ameerpet-hyderabad-218478",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "3636",
    name: "Kakatiya Mess",
    cloudinaryImageId: "l4ppu8o6nhdospxcnrkh",
    locality: "Ameerpet",
    areaName: "Ameerpet",
    costForTwo: "₹400 for two",
    cuisines: [
    "Andhra",
    "Biryani"
    ],
    avgRating: 4.5,
    parentId: "19237",
    avgRatingString: "4.5",
    totalRatingsString: "10K+",
    sla: {
    deliveryTime: 20,
    lastMileTravel: 1.5,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "1.5 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-06-09 16:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    aggregatedDiscountInfoV2: { },
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-2699c8f0-3f16-402c-8549-e360d9f79f6b"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/kakatiya-mess-ameerpet-hyderabad-3636",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "25251",
    name: "Meridian Restaurant",
    cloudinaryImageId: "cxvuxxwpkicbqo3nkqiy",
    locality: "Panjagutta",
    areaName: "Panjagutta",
    costForTwo: "₹400 for two",
    cuisines: [
    "Biryani",
    "Chinese",
    "Kebabs"
    ],
    avgRating: 4.3,
    parentId: "19276",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
    deliveryTime: 21,
    lastMileTravel: 2.3,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "2.3 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-06-09 23:20:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    aggregatedDiscountInfoV2: { },
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-2699c8f0-3f16-402c-8549-e360d9f79f6b"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/meridian-restaurant-panjagutta-hyderabad-25251",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
    ]


const Body = () => {
    return(
        <div className="body">
            <div className="search-container">
                <input className="search-input" type="text" />
                <button className="search-btn">Search</button>
            </div>
            <div className="restaurant-container">
                  
                  {/* <RestaurantCard resData = {resList[0]} /> 
                  <RestaurantCard resData = {resList[1]} /> 
                  <RestaurantCard resData = {resList[2]} /> 
                  <RestaurantCard resData = {resList[3]} />  
                  <RestaurantCard resData = {resList[4]} /> 
                  <RestaurantCard resData = {resList[5]} /> 
                  <RestaurantCard resData = {resList[6]} /> 
                  <RestaurantCard resData = {resList[7]} /> 
                  <RestaurantCard resData = {resList[8]} />   */}

                   {
                    resList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                   }
                   
                  

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