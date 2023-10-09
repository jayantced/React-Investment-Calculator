import Header from './Components/Header';
import InvestmentForm from './Components/InvestmentForm';
import InvestmentResults from './Components/InvestmentResults'
function App() {
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlySavings = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedInterest = +userInput['expected-return'] / 100;
    const investmentDuration = +userInput['investmentDuration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < investmentDuration; i++) {
      const yearlyInterest = currentSavings * expectedInterest;
      currentSavings += yearlyInterest + yearlySavings;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlySavings: yearlySavings,
      });
    }

    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    <InvestmentForm />
      <InvestmentResults />
    </div>
  );
}

export default App;
