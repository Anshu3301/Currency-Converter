import { useEffect,useState } from "react"

export default function useConverter(currency){
  const [data, setData] = useState({})

  useEffect( () => {
    (async function fetchData(){
    try{
         let result = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
         result = await result.json();
         setData(result[currency]);
    }
  catch(err){
    console.log(err);
    }
  }) ();  //IIFE
         
  }, [currency]);

  return data;
}
