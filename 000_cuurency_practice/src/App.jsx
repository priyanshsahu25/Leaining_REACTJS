import React, { useState } from "react";
import InputBox from "./Components/InputBox";
import "./App.css";
import useCurrencyinfo from "./Hooks/useCurrencyinfo";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTO] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyinfo(from);
  const option = Object.keys(currencyInfo);
  console.log(option);
  const swap=()=>{
    setFrom(to);
    setTO(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert=()=>{
    const value=amount*currencyInfo[to];
    setConvertedAmount(value);
  }
  return (
    <>
      <div>
        <form   onSubmit={(e) => {
              e.preventDefault();
              convert();
            } }>
          <InputBox
            selectedCurrency={from}
            amount={amount}
            label={from}
            currencyOptions={option}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
          />{" "}
          <br />
          <InputBox
          selectedCurrency={to}
            label={to}
            amount={convertedAmount}
            onAmountChange={(amount) => setConvertedAmount(amount)}
            currencyOptions={option}
            onCurrencyChange={(val) => setTO(val)}
          />
          <button onClick={swap}>SWAP</button>
          <button onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
      </div>
    </>
  );
}

export default App;
