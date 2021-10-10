import React from 'react'

const Crypto = ({crypto}) => {
    return (
        <div className="crypto_container">
            {crypto.map(item => (
                <div key={item.id} className="each_item">
                    <div className="image"><img src={item.image} alt={item.name} /> <h3>{item.name}</h3></div>
                    <div>{item.symbol.toUpperCase()}</div>
                    <div>€{item.current_price.toLocaleString()}</div>
                    <div>€{item.market_cap.toLocaleString()}</div>
                    <div></div>
                    <div></div>
                </div>
            ))}
        </div>
    )
}

export default Crypto;
