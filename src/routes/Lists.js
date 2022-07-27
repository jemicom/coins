import React ,{ useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import Pagenation from '../components/Pagenation'; 

const Lists = ({coins,  setSelectCoin  }) => {
  const [currentPage, setCurrentPage] = useState(1); // 화면에 보여질 페이지
  const [postsPerPage] = useState(30); // 화면에 보여질 개수
  const indexOfLastPost = currentPage * postsPerPage; 
  // 현재 페이지에 * 보여질 개수 : 3 * 30 = 90번째 
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // 90번째 - 보여질 개수 : 시작번호

  const currentPosts = coins.slice(indexOfFirstPost, indexOfLastPost);
  // 시작 번호과 보여질 개수로 화면 자르기 
  
  const selectHandle=(symbol)=>{
      console.log(symbol);
      const findCoin = coins.find(coin=>coin.symbol === symbol ? coin : '' );
      setSelectCoin(findCoin);
  }

  return (
    <div className='section'>
        
        <h2>Coin Lists</h2>
        <div className='coinList-container'>
        {
          currentPosts.map(coin=>(
           
                <div className='coin-box' key={coin.id}>
                    <Link to="/Details"  onClick={ ()=> selectHandle(coin.symbol) }>
                    <img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt="" />

                    <div>{ coin.id }</div>
                    <div>{ coin.symbol }</div>
                    <div>{ coin.name}</div>
                    <div>{ coin.quotes.USD.price }</div>
                     </Link>
                </div>
          ))
        }
        </div>
        <Pagenation  
                  postsPerPage={postsPerPage} 
                  totalPosts={coins.length}  
                  setCurrentPage={setCurrentPage}
            />
    </div>
  )
}

export default Lists
