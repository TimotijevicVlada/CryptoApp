import React from "react";

const Crypto = ({ crypto, loading }) => {
  return (
    <div className="crypto_container">
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        crypto.map((item) => (
          <div key={item.id} className="each_item">
            <div className="image">
              <img src={item.image} alt={item.name} /> <h4>{item.name}</h4>
            </div>
            <div className="symbol">{item.symbol.toUpperCase()}</div>
            <div
              className={
                item.price_change_percentage_24h < 0
                  ? "percentage red"
                  : "percentage green"
              }
            >
              {item.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="price">€{item.current_price.toLocaleString()}</div>
            <div className="market_cap">
              Market Cap: €{item.market_cap.toLocaleString()}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Crypto;
