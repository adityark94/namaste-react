import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[]);

    const {resId} = useParams();

    const fetchMenu = async () => {
        const res = await fetch(MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const data = await res.json();
        console.log(data)
        setResMenu(data);
    }

  return (
    <h4>{resMenu?.data?.cards[0]?.card?.card?.info?.name}</h4>
  )
}

export default RestaurantMenu;