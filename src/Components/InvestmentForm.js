import { useState } from "react";
import "./InvestmentForm.css";

const InvestmentForm = (props) => {

    const [enteredCurrentSavings, setEnteredCurrentSavings] = useState('');
    const [enteredYearlyContribution, setEnteredYearlyContribution] = useState('');
    const [enteredExpectedReturn, setEnteredExpectedReturn] = useState('');
    const [enteredInvestmentDuration, setEnteredInvestmentDuration] = useState('');

    const currentSavingsHandler = (event) => {
        setEnteredCurrentSavings(event.target.value);
        // console.log(enteredCurrentSavings);
    }
    const yearlyContributionHandler = (event) => {
        setEnteredYearlyContribution(event.target.value);
    }
    const expectedReturnHandler = (event) => {
        setEnteredExpectedReturn(event.target.value);
    }
    const investmentDurationHandler = (event) => {
        setEnteredInvestmentDuration(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const investmentData = {
            currentSavings: enteredCurrentSavings,
            yearlyContribution: enteredYearlyContribution,
            expectedReturn: enteredExpectedReturn,
            investmentDuration: enteredInvestmentDuration
        }
        props.onSaveInvestmentData(investmentData);
        // console.log(investmentData);

    }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" value={enteredCurrentSavings} onChange={currentSavingsHandler} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Contribution ($)</label>
          <input type="number" id="yearly-contribution" value={enteredYearlyContribution} onChange={yearlyContributionHandler} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" value={enteredExpectedReturn} onChange={expectedReturnHandler} />
        </p>
        <p>
          <label htmlFor="investmentDuration">
            Investment investmentDuration (years)
          </label>
          <input type="number" id="investmentDuration" value={enteredInvestmentDuration} onChange={investmentDurationHandler} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
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
