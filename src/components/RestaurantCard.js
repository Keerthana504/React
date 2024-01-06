import rating from "../../assets/favorite-5785.png";
import { RESTR0_ASSET_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const info = props?.data?.info;
  const link = props?.data?.cta?.link;

  return (
    <section className={props?.className} key={info?.id}>
      <a href={link} target="_blank">
        <img
          className="res-img"
          src={RESTR0_ASSET_URL + info?.cloudinaryImageId}
          alt="dish"
        ></img>
        {props?.className?.includes("top-restaurants") &&
          info.aggregatedDiscountInfoV3 && (
            <div className="offer-sec">
              <p>
                {info?.aggregatedDiscountInfoV3?.header === "ITEMS"
                  ? "Starts "
                  : info?.aggregatedDiscountInfoV3?.header + " "}
                {info?.aggregatedDiscountInfoV3?.subHeader}
              </p>
            </div>
          )}
      </a>
      <section className="res-desc">
        <div className="top">
          <p className="line-clamp-text">{info?.name}</p>
          <p className="grid">
            <span>
              <img className="rating" src={rating} alt="rating"></img>
              <span>{info?.avgRating} &#x2022;</span>
            </span>
            <span className="m-left">{info?.sla?.slaString}</span>
          </p>
        </div>
        <div className="bottom">
          <p className="line-clamp-text">{info?.cuisines?.join(", ")}</p>
          <p className="line-clamp-text">{info?.locality}</p>
        </div>
      </section>
    </section>
  );
};
export default RestaurantCard;
