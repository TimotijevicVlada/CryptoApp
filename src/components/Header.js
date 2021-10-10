import React from 'react'

const Header = ({setSearch}) => {
    return (
        <div className="header">
            <h2 className="logo">Crypto App</h2>
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="search coin"/>
        </div>
    )
}

export default Header;
