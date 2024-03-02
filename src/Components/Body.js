import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants]= useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);


    const [searchText,setSearchText] = useState("");
// Whenever state variables update, react triggers a reconciliation-renders the components)
    console.log("Body Rendered")

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9508017&lng=77.6995544&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )

        const Api = await data.json();

        console.log("====this data",Api)

        // console.log(Api?.data?.cards[2]?.card?.card.gridElements.infoWithStyle.restaurants)
        //     // , "============ Api data");

        //Optional chaining
        setListOfRestaurants(Api?.data?.cards[2]?.card?.card.gridElements.infoWithStyle?.restaurants );
        setFilteredRestaurant(Api?.data?.cards[2]?.card?.card.gridElements.infoWithStyle?.restaurants);
    };
     
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
    return(
<h1>Looks like you're offline!! Please check your internet connection </h1>
) 
    //Conditional Rendering
    //   if(listOfRestaurants?.length === 0){
    //     return <Shimmer />
    //   }

    return listOfRestaurants?.length === 0 ? <Shimmer />:(
      <div className="body">
        <div className="filter flex">
            <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=> {
                    setSearchText(e.target.value)
                }}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={()=> {
                    //Filter the restraunt cards and update the UI
                    //searchText
                    console.log(searchText);
                   

                    //search filter
                    const filteredRestaurant = listOfRestaurants.filter((res)=>
                        res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) )
                   

                    setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>
            </div>

            <div className="search m-4 p-4 flex item-center">
            <button className="px-4 py-2 bg-gray-100"
            onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                    (res)=>res.data.avgRating > 4
                    );
                    setListOfRestaurants(filteredList)
                }} >
                    Top Rated resturant</button>
            </div>

                    </div>
                    <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
      </div>
    );
  };
  export default Body;