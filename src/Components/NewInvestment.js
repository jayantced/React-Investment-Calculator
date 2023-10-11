import InvestmentForm from './InvestmentForm';

const NewInvestment = () => {

    const saveInvestmentDataHandler = (enteredInvestmentData) => {
        const investmentData = {
            ...enteredInvestmentData
        }
        console.log(investmentData);
    }

    return (
        <InvestmentForm onSaveInvestmentData={saveInvestmentDataHandler} />
    )
}

export default NewInvestment;