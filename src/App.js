import {useState, useEffect} from "react";
import './App.css';
import Crypto from "./components/Crypto";

function App() {

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkiline=false";

  const [crypto, setCrypto] = useState([]);

  const fetchCrypto = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setCrypto(data);
  }

  useEffect(() => {
    fetchCrypto();
  }, [])

  return (
    <div className="App">
      <Crypto crypto={crypto}/>
    </div>
  );
}

export default App;
