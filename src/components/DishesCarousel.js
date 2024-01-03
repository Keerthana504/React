import leftArr from "../../assets/icons8-left-arrow-50.png";
import rightArr from "../../assets/icons8-right-arrow-50.png";
import { CAROUSEL_ASSET_URL } from "../utils/constants";

const processImageData = (data) => {
  let imgList = data.info;
  let link = CAROUSEL_ASSET_URL;
  const newImgList = imgList.map((item, index) => {
    let imgIds = [];
    if (item.imageId) {
      imgIds[index] = { id: item.id, imageURL: link + item.imageId };
    }
    return imgIds[index];
  });
  return newImgList;
};

const isEnable = (slide) => {
  if (slide === 3) {
    document.querySelector(".right-btn").disabled = true;
  } else if (slide === 1) {
    document.querySelector(".left-btn").disabled = true;
  } else if (slide > 1 && slide < 3) {
    document.querySelector(".right-btn").disabled = false;
    document.querySelector(".left-btn").disabled = false;
  }
};

const DishesCarousel = (props) => {
  // const moreImg = document.querySelector(".carousel-img");
  let slide = 1;

  const moveLeftImg = () => {
    const moreImg = document.querySelector(".carousel-img");
    moreImg.style.transform = `translateX(-${slide * 7 * 200}px)`;
    slide--;
    isEnable(slide);
    console.log(slide);
  };

  const moveRightImg = () => {
    const moreImg = document.querySelector(".carousel-img");
    moreImg.style.transform = `translateX(-${slide * 7 * 200}px)`;
    slide++;
    isEnable(slide);
    console.log(slide);
  };

  let newImgList = processImageData(props.imgData);

  return (
    <section className="carousel-box frame-overflow">
      <div className="carousel-text">
        <p className="sub-heading">What's on your mind?</p>
        <p className="carousel-btn">
          <button className="left-btn" onClick={() => moveLeftImg()}>
            <img src={leftArr}></img>
          </button>
          <button className="right-btn">
            <img src={rightArr} onClick={() => moveRightImg()}></img>
          </button>
        </p>
      </div>
      <div className="carousel-img">
        {newImgList.map((item) => {
          return (
            <img src={item.imageURL} alt="carousel image" key={item.id}></img>
          );
        })}
      </div>
    </section>
  );
};

export default DishesCarousel;
