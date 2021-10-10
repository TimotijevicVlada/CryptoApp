import {useState, useEffect} from "react";
import './App.css';
import Crypto from "./components/Crypto";
import ReactPaginate from "react-paginate";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkiline=false";

  const [crypto, setCrypto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  

  const fetchCrypto = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setCrypto(data);
    setLoading(false)
  }

  useEffect(() => {
    fetchCrypto();
  }, [])

  const filteredCoins = crypto.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

   //Pagination
   const [pageNumber, setPageNumber] = useState(0);
   const itemsPerPage = 10;
   const pagesVisited = pageNumber * itemsPerPage;
   const displayItems = filteredCoins.slice(pagesVisited, pagesVisited + itemsPerPage);
   const pageCount = Math.ceil(filteredCoins.length / itemsPerPage);
   const changePage = ({ selected }) => {
     setPageNumber(selected);
   };

  return (
    <div className="App">
      <Header setSearch={setSearch}/>
      <Crypto crypto={displayItems} loading={loading}/>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationContainer"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      <Footer />
    </div>
  );
}

export default App;
