import React, {useState, useEffect} from 'react'
import { BrowserRouter,  Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer'; 
import Home from './routes/Home'; 
import About from './routes/About'; 
import Lists from './routes/Lists'; 
import Details from './routes/Details'; 
import Missing from './routes/Missing'; 



const URL = "https://api.coinpaprika.com/v1/tickers";


const App = () => {
    const [coins, setCoins] = useState([]);
    // const conins = [];
    const [loading , setLoading] = useState(true);
    const [selectCoin , setSelectCoin] = useState("");

    

    const cointracker = ()=>{
        fetch(URL)
        .then( data=> data.json())
        .then( data=>{
            console.log(data);
            // coins = data; 
            setCoins(data); 
            // 연습할 때는 버벅거리지 않도록  상위 100 개 정보만 가져올 것임 
            setLoading( false );
        })
    }

     useEffect(()=>{
        cointracker();
        // 마운트 : 맨처음 화면이 로드될때 한 번 만 불러오기 
    }, [])


    const selectHandle = (e)=>{
        console.log(e.target.value);
        let value = e.target.value;
        const findCoin = coins.find(coin=>coin.symbol === value ? coin : '' );
        console.log(findCoin);
        setSelectCoin( findCoin );
    }

  return (
    <BrowserRouter>
      <div>
            <Header title={"CoinTracker"} />
            <Routes>
                <Route path="/" element={
                    <Home coins={coins}  
                          loading={loading}  
                          selectHandle={selectHandle}   
                          selectCoin={selectCoin} 
                    />} 
                />
                <Route path="/Home" element={
                    <Home coins={coins}  
                            loading={loading}  
                            selectHandle={selectHandle}   
                            selectCoin={selectCoin} 
                        />} 
                />
                <Route path="/Lists" element={
                      <Lists    
                            loading={loading}   
                            coins={coins} 
                            selectCoin={selectCoin} 
                            setSelectCoin={setSelectCoin}
                            
                      />} 
                />
                <Route path="/About" element={<About />} />
                <Route path="/Details" element={
                    <Details selectCoin={selectCoin} />} 
                />
                <Route path="/*" element={<Missing />} />
            </Routes>
            
            <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
