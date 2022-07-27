import React, {useState, useEffect} from 'react'
import './App.css'

const URL = "https://api.coinpaprika.com/v1/tickers";
// 갑자기 데이터가 없어지기도 함 

const Coins = () => {
    const [coins, setCoins] = useState([]);
    // const conins = [];
    const [loading , setLoading] = useState(true);

    const cointracker = ()=>{
        fetch(URL)
        .then( data=> data.json())
        .then( data=>{
            console.log(data);
            // coins = data; 
            setCoins(data); 
            setLoading( false ); // 로딩 완료
        })
    }

    useEffect(()=>{
        cointracker();
        // 마운트 : 맨처음 화면이 로드될때 한 번 만 불러오기 
    }, [])

  return (
    <div>
        <h1> CoinTracker{ coins.length }</h1>
        {  loading ? <strong> Loading ...</strong> : <select>
            {
                coins.map((coin, index)=>(
                    <option> <span>{coin.name}</span>  <span>{coin.symbol}</span>  <span>${coin.quotes.USD.price}USD</span> </option>
                ))
            }
        </select>  }   
    </div>
  )
}

export default Coins
