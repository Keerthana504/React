import leftArr from "../../assets/icons8-left-arrow-50.png";
import rightArr from "../../assets/icons8-right-arrow-50.png";
import { CAROUSEL_ASSET_URL } from "../utils/constants";

const processImageData = (data) => {
  console.log(data);
  let imgList = data.info;
  let link = CAROUSEL_ASSET_URL;

  console.log("1", imgList);
  const newImgList = imgList.map((item, index) => {
    let imgIds = [];
    if (item.imageId) {
      imgIds[index] = { id: item.id, imageURL: link + item.imageId };
    }
    return imgIds[index];
  });
  console.log("2", newImgList);
  return newImgList;
};

const moveLeftImg = () => {};

const moveRightImg = () => {
  const btn = document.querySelector("");
};

const DishesCarousel = (props) => {
  console.log(props);
  let newImgList = processImageData(props.imgData);
  console.log(newImgList);
  return (
    <section className="carousel-box">
      <div className="carousel-text">
        <p className="sub-heading">What's in your mind?</p>
        <p className="carousel-btn">
          <button
            className="disabled"
            id="left-btn"
            onClick={() => moveLeftImg()}
          >
            <img src={leftArr}></img>
          </button>
          <button>
            <img
              src={rightArr}
              id="right-btn"
              onClick={() => moveRightImg()}
            ></img>
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
