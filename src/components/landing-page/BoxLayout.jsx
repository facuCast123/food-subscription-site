import { BsBox2 } from "react-icons/bs";

import "./BoxLayout.css";
import { useState } from "react";

const Box = () => {
  const [boxSelect, setBoxSelect] = useState(null);

  const handleBoxSelect = (box) => {
    setBoxSelect(box);
  };

  return (
    <div className="box__layout">
      <div
        className="box small-size"
        style={boxSelect === "box1" ? { border: "2px solid black" } : {}}
        onClick={() => handleBoxSelect("box1")}
      >
        <span className="box__size">S box</span>

        <div className="box__icon__wrapper">
          <BsBox2 className="box__icon" />
          <p className="box__amount">
            <span>7</span> MEALS
          </p>
        </div>

        <span className="box__per-meal">Per Meal</span>

        <p className="box__offer">Special Offer</p>

        <p className="box__pricing">
          $ <span>50</span>
        </p>
      </div>

      <div
        className="box medium-size"
        style={boxSelect === "box2" ? { border: "2px solid black" } : {}}
        onClick={() => handleBoxSelect("box2")}
      >
        <span className="box__size">M box</span>

        <div className="box__icon__wrapper">
          <BsBox2 className="box__icon" />
          <p className="box__amount">
            <span>14</span> MEALS
          </p>
        </div>

        <span className="box__per-meal">Per Meal</span>

        <p className="box__offer">Special Offer</p>

        <p className="box__pricing">
          $ <span>85</span>
        </p>
      </div>

      <div
        className="box large-size"
        style={boxSelect === "box3" ? { border: "2px solid black" } : {}}
        onClick={() => handleBoxSelect("box3")}
      >
        <span className="box__size">L box</span>

        <div className="box__icon__wrapper">
          <BsBox2 className="box__icon" />
          <p className="box__amount">
            <span>21</span> MEALS
          </p>
        </div>

        <span className="box__per-meal">Per Meal</span>

        <p className="box__offer">Special Offer</p>

        <p className="box__pricing">
          $ <span>135</span>
        </p>
      </div>
    </div>
  );
};

export default Box;
