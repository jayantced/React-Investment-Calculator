import { useState } from "react";
import "./InvestmentForm.css";

const InvestmentForm = (props) => {

  
  const initialUserInput = {
        'current-savings': 10000,
        'yearly-contribution': 1200,
        'expected-return': 7,
        'investmentDuration': 10
  }

  const [userInput, setUserInput] = useState(initialUserInput);

  const inputChangeHandler = (input, value) => {
    console.log(input, value);
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input] : value
      }
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onCalculate(userInput);
  };
  const resetHandler = () => {
    setUserInput(initialUserInput);
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput['current-savings']}
            onChange={(event) => inputChangeHandler('current-savings', event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Contribution ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput['yearly-contribution']}
            onChange={(event) =>
              inputChangeHandler('yearly-contribution', event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput['expected-return']}
            onChange={(event) => inputChangeHandler('expected-return', event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="investmentDuration">
            Investment investmentDuration (years)
          </label>
          <input
            type="number"
            id="investmentDuration"
            value={userInput['investmentDuration']}
            onChange={(event) =>
              inputChangeHandler('investmentDuration', event.target.value)
            }
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
