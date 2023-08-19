import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

const Body = () => {
  const [listResData, setListResData] = useState([]);
  const [filteredListResData, setFilteredListResData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1902827&lng=72.9711542&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    setListResData(res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredListResData(res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredList = listResData.filter((res) =>
                res.data.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredListResData(filteredList);
            }}
          >
            Search
          </button>
        </div>
        {/* <button className="filter-btn" onClick={() => {}}>Top Rated Restaurants</button> */}
      </div>
      <div className="res-container">
        {filteredListResData.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><RestaurantCard resData={restaurant.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
