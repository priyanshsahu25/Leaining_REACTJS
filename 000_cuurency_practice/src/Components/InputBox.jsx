import React from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={amount}
        placeholder="Eneter amount"
        type="number"
        onChange={(e) => onAmountChange(Number(e.target.value))}
      />

      <select onChange={(e)=>onCurrencyChange(e.target.value)} value={selectedCurrency}>
        {
          currencyOptions.map((options)=>(
            <option value={options} key={options}>{options}</option>
          ))
        }
      </select>
     

    </>
  );
};

export default InputBox;
