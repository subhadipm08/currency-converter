import { useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import InputBox from "./InputBox";

const ExchangeBox = () => {
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState('inr');
    const [toCurrency, setToCurrency] = useState('usd');
    const [convertedAmount, setConvertedAmount] = useState("");

    const currencyInfo = useCurrencyInfo(fromCurrency);
    const currencyOptions = currencyInfo ? Object.keys(currencyInfo) : [];

    const swapCurrency = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }

    const convert = () => {
        if (!currencyInfo) return;
        const rate = currencyInfo[toCurrency];
        setConvertedAmount(amount * rate);
    }

    const handleAmountChange = (value) => {
        if(isNaN(value) || Number(value) < 0) {
            alert("Please enter a valid non-negative number");
            return;
        };
        setAmount(Number(value));
    };


  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-6 rounded-2xl p-4 sm:p-6 lg:p-8 
            bg-white/10 backdrop-blur-lg 
            border border-white/20 
            shadow-2xl text-white">
        <InputBox 
                label="From" amount={amount} onAmountChange={handleAmountChange} 
                currencyOptions={currencyOptions} onCurrencyChange={(fromCurrency) => setFromCurrency(fromCurrency)} 
                selectedCurrency={fromCurrency} amountDisabled={false} currencyDisabled={false} 
                />  
        <button
            onClick={swapCurrency}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium transition-colors duration-300">
            Swap
        </button>
        <InputBox 
                label="To" amount={convertedAmount} 
                onAmountChange={(convertedAmount) => setConvertedAmount(convertedAmount)}
                onCurrencyChange={(toCurrency) => setToCurrency(toCurrency)} 
                currencyOptions={currencyOptions} 
                selectedCurrency={toCurrency} amountDisabled={true} 
                currencyDisabled={false}
                />
        <button 
            onClick={convert}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white font-medium transition-colors duration-300">
             Convert
        </button>
    </div>
  )
}

export default ExchangeBox
