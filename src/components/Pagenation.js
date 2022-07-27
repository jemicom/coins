import React from 'react'
import './Pagenation.css'
import { Link } from 'react-router-dom'

const Pagenation = ({ postsPerPage, totalPosts,  setCurrentPage}) => {
    
  const pageNumbers = [];
  for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage ); i++){
    // floor는 내림이므로 내용은 모두 보여야 하므로 ceil 사용
      pageNumbers.push(i);
  }
    // return (
    //     <div>
    //         <h2>Pagenation</h2>
    //         <ul className='pager'>
    //             { pageNumbers.map((number, i)=>( i<=10 ? 
    //                  <li key={number} className="page-item">
    //                  <Link to="/Lists" className='page-link'
    //                      onClick={()=> setCurrentPage(number)}
    //                  > {number} </Link>
    //              </li> : null
                    
    //             ))}
    //         </ul>
    //     </div>
    // )
    return (
            <div>
                <h2>Pagenation</h2>
                <ul className='pager'>
                    { pageNumbers.map(number=>( 
                         <li key={number} className="page-item">
                         <Link to="/Lists" className='page-link'
                             onClick={()=> setCurrentPage(number)}
                         > {number} </Link>
                     </li>  
                    ))}
                </ul>
            </div>
        )
}

export default Pagenation