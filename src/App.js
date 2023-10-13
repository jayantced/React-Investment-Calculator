import { useState } from 'react';
import Header from './Components/Header';
import InvestmentForm from './Components/InvestmentForm';
import InvestmentResults from './Components/InvestmentResults'
function App() {
  const [results, setResults] = useState(null);

  const calculateHandler = (userInput) => {
    setResults(userInput);
  };

  const yearlyData = []; // per-year results
  if (results) {
  
    let currentSavings = results['current-savings']; // feel free to change the shape of this input object!
    const yearlySavings = results['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedInterest = results['expected-return'] / 100;
    const investmentDuration = results['investmentDuration'];
  
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
  }
  console.log(results);

  return (
    <div>
      <Header />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <InvestmentForm onCalculate={calculateHandler} />
      {!results && <p style={{textAlign: 'center'}}>No investments made.</p>}
      {results && <InvestmentResults data={yearlyData} initialInvestments={results['current-savings']}/>}
    </div>
  );
}

export default App;
