import InvestmentForm from './InvestmentForm';

const NewInvestment = () => {

    const saveInvestmentDataHandler = (enteredInvestmentData) => {

    }

    return (
        <InvestmentForm onSaveInvestmentData={saveInvestmentDataHandler}/>
    )
}

export default NewInvestment;