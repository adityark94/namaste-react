import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, deliveryTime } =
    resData?.data;
  return (
    <div className="res-card">
      <img className="res-img" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>&#8377;{costForTwo/100} For Two</h4>
      <h4>{deliveryTime} Mins</h4>
    </div>
  );
};

export default RestaurantCard;
