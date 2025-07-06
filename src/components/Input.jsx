import React from 'react';
import { useId } from 'react';

function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "inr",
    amountDisable = false,
    currencyDisable = false,
    type,
}) {
  const Id = useId();

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex`}>
          <div className="w-1/2">
              <label htmlFor={Id} 
              className="text-black/70 mb-2 mr-44 inline-block">
                  {label}
              </label>

              <input id={Id}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="text" // Changed from "number" to "text" to handle empty string.
                  placeholder="Amount"
                  disabled={amountDisable}
                  value={amount} 
                  onChange={(e) => {
                      // Allow empty string, convert back to number if valid.
                      const value = e.target.value;
                      onAmountChange && onAmountChange(value === '' ? '' : Number(value));
                  }}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/70 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency} 
                  onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} 
                  disabled={currencyDisable} 
              >
                  {currencyOptions.map((c)=> (
                  <option key={c} value={c}>{c}</option>))}
              </select>
          </div>
      </div>
  );
}

export default Input;
