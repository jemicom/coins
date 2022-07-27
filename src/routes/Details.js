import React, {useState} from 'react'
import ApexCharts from 'react-apexcharts'
//"react-apexcharts": "^1.4.0",
import './styles.css'

const  seriesData = [{
  name: "Desktops",
  data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
},
{
  name: "Data2",
  data: [1, 4, 15, 41, 69, 32, 39, 31, 48]
}]
const  optionsData = {  
  chart: {
    zoom: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: '코인 상한가',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
}
const Details = ({selectCoin}) => {
  const [series , useSeries ]= useState(seriesData);
  const [options, setOptions]= useState (optionsData);

  return (
    <div className='section'>
      <div className='coinDetails-container'>
          <h2>Details : {selectCoin.name} </h2>
          <div className='coinDetails-items'>
              <div clasName="coinDetails">
                  <img src={`https://coinicons-api.vercel.app/api/icon/${selectCoin.symbol.toLowerCase()}`} />
              </div>
              <div clasName="coinDetails">{selectCoin.name}</div>
              <div clasName="coinDetails">{selectCoin.rank}</div>
              <div clasName="coinDetails">{selectCoin.quotes.USD.price}</div>
              {/* 추가적으로 표시할 내용 넣기  */}
              <div  className="chart">
                <ApexCharts type="line" 
                      width={500} 
                      height={300 } 
                      options={options}
                      series={series }
                />
              </div>
          </div>
      </div>
    </div>
  )
}

export default Details
 