import rating from "../../assets/favorite-5785.png";
import { RESTR0_ASSET_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const info = props.data.info;
  const link = props.data.cta.link;
  return (
    <section className="res-card" key={info.id}>
      <a href={link} target="_blank">
        <img
          className="res-img"
          src={RESTR0_ASSET_URL + info.cloudinaryImageId}
          alt="dish"
        ></img>
      </a>
      <section className="res-desc">
        <div className="top">
          <p>{info.name}</p>
          <p>
            <img className="rating" src={rating} alt="rating"></img>
            <span>{info.avgRating} &#x2022;</span>
            <span className="m-left">{info.sla.slaString}</span>
          </p>
        </div>
        <div className="bottom">
          <p>{info.cuisines.join(", ")}</p>
          <p>{info.locality}</p>
        </div>
      </section>
    </section>
  );
};
export default RestaurantCard;
