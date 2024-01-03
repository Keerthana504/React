import dataSet from "../utils/restaurantsInfo.json";
import topRes from "../utils/top-restaurants.json";
import leftArr from "../../assets/icons8-left-arrow-50.png";
import rightArr from "../../assets/icons8-right-arrow-50.png";
import RestaurantCard from "./RestaurantCard";

const isEnable = (slide) => {
  if (slide === 5) {
    document.querySelector(".right-btn").disabled = true;
  } else if (slide === 1) {
    document.querySelector(".left-btn").disabled = true;
  } else if (slide > 1 && slide < 5) {
    document.querySelector(".right-btn").disabled = false;
    document.querySelector(".left-btn").disabled = false;
  }
};

const Main = () => {
  let slide = 1;

  const moveLeftImg = () => {
    const moreRes = document.querySelector(".top-res");
    moreRes.style.transform = `translateX(-${slide * 5 * 225}px)`;
    slide--;
    isEnable(slide);
    console.log(slide);
  };

  const moveRightImg = () => {
    const moreRes = document.querySelector(".top-res");
    moreRes.style.transform = `translateX(-${slide * 5 * 225}px)`;
    slide++;
    isEnable(slide);
    console.log(slide);
  };

  const showMoreRes = () => {};
  return (
    <main className="body-container">
      <div className="carousel-text">
        <p className="sub-heading">Top restaurants in Hyderabad</p>
        <p className="carousel-btn">
          <button className="left-btn" onClick={() => moveLeftImg()}>
            <img src={leftArr}></img>
          </button>
          <button>
            <img
              src={rightArr}
              className="right-btn"
              onClick={() => moveRightImg()}
            ></img>
          </button>
        </p>
      </div>
      <div className="frame-overflow">
        <section className="top-res">
          {topRes.restaurants.map((data) => (
            <RestaurantCard
              data={data}
              className="top-restaurants res-card"
            ></RestaurantCard>
          ))}
        </section>
      </div>
      <section className="filter-res">
        <p className="sub-heading">
          Restaurants with online food delivery in Hyderabad
        </p>
      </section>
      <section className="res-container">
        {dataSet.map((data) => (
          <RestaurantCard data={data} className="res-card"></RestaurantCard>
        ))}
        <div className="show-more-section">
          <button className="show-more" onClick={() => showMoreRes()}>
            <p>Show More</p>
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              aria-hidden="true"
              strokecolor="rgba(2, 6, 12, 0.92)"
              fillcolor="rgba(2, 6, 12, 0.6)"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.30875 4.27703C0.931854 4.60108 0.889014 5.16932 1.21307 5.54622L4.57534 9.45679C4.58439 9.46731 4.59351 9.47793 4.6027 9.48863C4.75431 9.66514 4.92366 9.86231 5.08944 10.0078C5.28433 10.1788 5.5905 10.385 6.01603 10.385C6.44156 10.385 6.74773 10.1788 6.94262 10.0078C7.1084 9.86232 7.27776 9.66515 7.42937 9.48865C7.43856 9.47795 7.44768 9.46733 7.45673 9.4568L10.7864 5.58418C11.1105 5.20729 11.0677 4.63905 10.6908 4.31499C10.3139 3.99093 9.74563 4.03377 9.42157 4.41066L6.09187 8.28328C6.06476 8.3148 6.0396 8.34406 6.01604 8.37135C5.99247 8.34406 5.96732 8.3148 5.94021 8.28328L2.57794 4.37271C2.25389 3.99581 1.68565 3.95297 1.30875 4.27703Z"
                fill="rgba(2, 6, 12, 0.6)"
                fill-opacity="0.92"
              ></path>
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
