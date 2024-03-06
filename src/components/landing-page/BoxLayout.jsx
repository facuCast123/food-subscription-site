import { BsBox2 } from "react-icons/bs";

import "./BoxLayout.css";

const Box = () => {
  return (
    <div className="box__layout">
      <div className="box small-size">
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

      <div className="box medium-size">
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

      <div className="box large-size">
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
