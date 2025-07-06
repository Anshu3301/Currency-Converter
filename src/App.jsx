import { useState } from 'react';
import Input from './components/Input.jsx';
import  useConverter  from './hooks/useConverter';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('inr');
  const [to, setTo] = useState('usd');
  const [convertedamount, setConvertedamount] = useState(0);

  const currencyName = useConverter(from);
  // console.log(currencyName);
  const options = Object.keys(currencyName);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedamount);
    setConvertedamount(amount);
  };

  const convert = (currencyName) => {
    setConvertedamount(amount * currencyName[to]);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
      <div className='h-full w-full flex items-center bg-black'>
          <div className='h-full w-1/3 bg-cover bg-no-repeat bg-myImage'>
          </div>
          <div className="w-2/3 h-full flex items-center">
               <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
             <form
               onSubmit={(e) => {
                 e.preventDefault();
                 convert(currencyName);
               }}
             >
               <div className="w-full mb-1">
                 <Input
                   label="From"
                   amount={amount}
                   currencyOptions={options}
                   selectCurrency={from}
                   onCurrencyChange={(currencyName) => setFrom(currencyName)}
                   onAmountChange={(amount) => setAmount(amount)}
                 />
               </div>
               <div className="relative w-full h-0.5">
                 <button
                   type="button"
                   className="absolute left-1/2 hover:bg-blue-700 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 "
                   onClick={swap}
                 >
                   Swap
                 </button>
               </div>
               <div className="w-full mt-1 mb-4">
                 <Input
                   label="To"
                   amount={convertedamount}
                   currencyOptions={options}
                   selectCurrency={to}
                   onCurrencyChange={(currencyName) => setTo(currencyName)}
                   onAmountChange={(amount) => setConvertedamount(amount)}
                 />
               </div>
               <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg">
                Convert
               </button>
          </form>
        </div>
      </div>
      </div>
     
      
    </div>
  );
}

export default App;

