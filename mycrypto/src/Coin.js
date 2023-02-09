import React from 'react'
import './Coin.css';
const Coin = ({
    name,
    image,
    symbol,
    price,
    volume,
    priceChange
}) => {
    return (
        <>
        <div>
            <div className='coin-container'>
                <img src={image} alt='crypto' className='coin-img' />
                <h1 className='coin-name'>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
                <p className='coin-data'>price:Rs{price}</p>
                <p className='coin-volume'>vol:Rs{volume.toLocaleString()}</p>
                {priceChange < 0 ? (
                    <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                ) : <p className='coin-percent green '>{priceChange.toFixed(2)}%</p>}
                <button>BUY</button>
            </div>
            </div>
        </>
)
}

export default Coin
