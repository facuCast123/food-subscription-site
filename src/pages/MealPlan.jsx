import BoxLayout from "../components/landing-page/BoxLayout";

const MealPlan = () => {
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
          <button>
            <span className="accent">2</span> Weeks
          </button>
          <button>
            <span className="accent">3</span> Weeks
          </button>
          <button>
            <span className="accent">4</span> Weeks
          </button>
        </div>

        <p className="_select__description">
          *You can skip, stop, or cancel your order from the second time
          onwards. There are no commitments to the number of sessions or
          penalties associated with suspension or cancellation.
        </p>

        <button className="_select__menu">Select Menu</button>
      </div>
    </div>
  );
};

export default MealPlan;
