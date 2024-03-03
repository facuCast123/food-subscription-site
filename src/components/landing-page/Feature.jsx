import {
  IoIosSnow,
  IoIosFlash,
  IoIosLeaf,
  IoIosArrowRoundForward,
} from "react-icons/io";

const Feature = (props) => {
  return (
    <div className="feature__container">
      <img className="feature__image" src={props.item.url}></img>

      <div className="feature__content">
        <span className="feature__icon">
          {props.item.icon == "IoIosSnow" ? (
            <IoIosSnow />
          ) : props.item.icon == "IoIosFlash" ? (
            <IoIosFlash />
          ) : props.item.icon == "IoIosLeaf" ? (
            <IoIosLeaf />
          ) : null}
        </span>

        <h1>{props.item.title}</h1>

        <p className="feature__text">{props.item.text}</p>

        <p className="feature__link">
          <a href="#">Promise of food production</a> <IoIosArrowRoundForward />
        </p>
      </div>
    </div>
  );
};

// I have no idea if the following is correct but it seems to work as expected probably maybe.

Feature.propTypes = {
  item: Object,
  url: String,
  icon: String,
  title: String,
  text: String,
};

export default Feature;
