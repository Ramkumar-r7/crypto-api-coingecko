import React from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin.js';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
        console.log(res.data)
      })
  })
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const filteredCoin = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <div className='coin-app'>
        <div className='coin-search'>
          <p className='coin-text'>Crypto currency price by Market cap</p>
          <form>
            <input
              type="text"
              className='coin-input'
              placeholder='search'
              onChange={handleChange} />
          </form>
        </div>
        <div className='container'>
        {filteredCoin.map(coin => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              volume={coin.total_volume}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              marketcap={coin.market_cap}
            />
          )
        }
        )}
        </div>
      </div>
    </>
  );
}

export default App
