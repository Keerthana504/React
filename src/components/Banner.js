import bannerImg from "../../assets/kisspng-milkshake-juice3.png";
import bannerImg2 from "../../assets/Thali.png";

const Banner = () => {
  return (
    <section className="banner">
      <article>
        Order Food Online! <br></br>add spice & chill to your plate.{" "}
        <span className="curve">
          <svg
            width="45%"
            height="90%"
            viewBox="0 0 78 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.25939C27 -0.240624 53.5 -0.2406 77 4.25939"
              stroke="#F15700"
              stroke-width="2.0"
            ></path>
          </svg>
        </span>
      </article>
      <div>
        <img src={bannerImg} alt="lassi"></img>
        <img src={bannerImg2} alt="Food-platter" className="thali"></img>
      </div>
    </section>
  );
};
export default Banner;
