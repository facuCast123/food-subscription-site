import { useState } from "react";
import BoxLayout from "../components/landing-page/BoxLayout";

const MealPlan = () => {
  const [selectButton, setSelectButton] = useState(null);

  const handleSelectButton = (button) => {
    setSelectButton(button);
  };

  return (
    <div className="meal-plan-page">
      <div className="meal-plan-page__heading">
        <h1>Select your plan</h1>
        <p>Let&apos;s choose a plan first</p>
      </div>

      <div className="meal-plan-page__select">
        <p>How many meals will you deliver?</p>

        <BoxLayout />

        <p>How many weeks do you want delivered?</p>

        <div className="_select__button-wrapper">
          <button
            style={
              selectButton === "button1" ? { border: "2px solid black" } : {}
            }
            onClick={() => handleSelectButton("button1")}
          >
            <span className="accent">2</span> Weeks
          </button>
          <button
            style={
              selectButton === "button2" ? { border: "2px solid black" } : {}
            }
            onClick={() => handleSelectButton("button2")}
          >
            <span className="accent">3</span> Weeks
          </button>
          <button
            style={
              selectButton === "button3" ? { border: "2px solid black" } : {}
            }
            onClick={() => handleSelectButton("button3")}
          >
            <span className="accent">4</span> Weeks
          </button>
        </div>

        <p className="_select__description">
          *You can skip, stop, or cancel your order from the second time
          onwards. There are no commitments to the number of sessions or
          penalties associated with suspension or cancellation.
        </p>

        <button
          className={`_select__menu ${selectButton !== null ? "active" : {}}`}
        >
          Select Menu
        </button>
      </div>
    </div>
  );
};

export default MealPlan;
