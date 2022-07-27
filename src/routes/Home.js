import React,{ useState, useEffect } from 'react'
import './styles.css'
import {Link} from 'react-router-dom'


const Home = ({ coins, loading, selectHandle , selectCoin }) => {
    
  return (
    <div className='section'>
      <div className='home-container'>
            <h2> CoinTracker{ coins.length }</h2>
            {  
                loading ? <strong> Loading ...</strong> : 
                    <select  onChange={selectHandle}>
                        {
                            coins.map((coin, index)=>(
                                <option>  <span>{coin.symbol}</span> </option>
                            ))
                        }
                    </select>  
            }  
            {
                !selectCoin ?   <div  className='coinDetail-box'>데이터를 찾을 수 없습니다.</div> : 
                        <div  className='coinDetail-box'>
                            <ul>
                                <li>
                                    <img src={`https://coinicons-api.vercel.app/api/icon/${selectCoin.symbol.toLowerCase()}`} />
                                </li>
                                <li>{selectCoin.name}</li>
                                <li>{selectCoin.rank}</li>
                                <li>{selectCoin.quotes.USD.price}</li>
                            </ul>

                            <Link to='Details' className='homeLink'> 코인 자세히 보기 </Link>
                        </div>
            }
            
      </div>
    </div>
  )
}

export default Home
