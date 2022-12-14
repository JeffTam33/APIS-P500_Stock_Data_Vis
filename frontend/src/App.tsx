import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import DisplayData from './components/DisplayData'
import Info from './components/Info'
import Footer from './components/Footer'
import StockDataService from './services/stocks'
import { MdOutlineNightlight, MdNightlight } from 'react-icons/md'

function App() {
  const [night, setNight] = useState(true)
  const [ticker, setTicker] = useState('GOOGL')
  const [stocks, setStocks] = useState([])

  const [dataEPS, setDataEPS] = useState([
    ["2021Q1", {
      "Estimate": 0.79,
      "Actual": 1.31
    }],
    ["2021Q2", {
      "Estimate": 0.96,
      "Actual": 1.36
    }],
    ["2021Q3", {
      "Estimate": 1.19,
      "Actual": 1.40
    }],
    ["2021Q4", {
      "Estimate": 1.38,
      "Actual": 1.53
    }],
    ["2022Q1", {
      "Estimate": 1.29,
      "Actual": 1.23
    }],
    ["2022Q2", {
      "Estimate": 1.27,
      "Actual": 1.21
    }],
    ["2022Q3", {
      "Estimate": 1.26,
      "Actual": 1.06
    }]
  ])

  const [selectedStock, setSelectedStock] = useState(
    {
      "ticker": "APPL",
      "name": "Apple Inc.",
      "EPSResults": {
        "2021Q1": {
          "Estimate": 0.79,
          "Actual": 1.31
        },
        "2021Q2": {
          "Estimate": 0.96,
          "Actual": 1.36
        },
        "2021Q3": {
          "Estimate": 1.19,
          "Actual": 1.40
        },
        "2021Q4": {
          "Estimate": 1.38,
          "Actual": 1.53
        },
        "2022Q1": {
          "Estimate": 1.29,
          "Actual": 1.23
        },
        "2022Q2": {
          "Estimate": 1.27,
          "Actual": 1.21
        },
        "2022Q3": {
          "Estimate": 1.26,
          "Actual": 1.06
        }
      }
    }
  )

  useEffect(() => {
    retrieveStocks()
  }, [])


  const retrieveStocks = () => {
    StockDataService.getAll()
    .then(response => {
      setStocks(response.data.stocks)

    })
    .catch(e => {
      console.log(e)
    })
  }

  const changeTicker = (ticker) =>  {
    setTicker(ticker)
    findDataByTicker(ticker)
    console.log(ticker)
  }
  
  const findDataByTicker = (ticker) => {
    let ans = stocks.find(stock => stock.ticker === ticker)
    if(!ans) {
      console.log("Error, can not find ticker")
      return false
    }
    setSelectedStock(ans)
    setDataEPS(Object.entries(ans.EPSResults))
  }

  function changeLightMode(){
    setNight(!night)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className='grid grid-rows-1 transition-colors duration-1000 bg-slate-200 dark:bg-slate-700'>
      <div className='grid grid-rows-0 transition-colors duration-1000 bg-primary dark:bg-black h-52 w-full place-content-center justify-center text-white'>
        <span className='float-left text-5xl font-mono'>API Earnings Stocks</span>
        <span className='float-left text-lg font-mono mt-4'>Search the 50 heavy weighted stocks of the S&P500</span>
        <span className='float-left text-sm font-mono'>*Weighted of top 50 as of November 24, 2022</span>
        {
          night ? 
            <MdOutlineNightlight onClick={changeLightMode} className='cursor-pointer toggle-dark ease-linear delay-150 rounded-lg transition-all:hover:bg-slate-500' size={50} /> : 
            <MdNightlight onClick={changeLightMode} className='cursor-pointer toggle-dark ease-linear delay-150 rounded-lg transition-all:hover:bg-slate-500' size={50} />
        }
      </div>

      <div className='grid grid-rows-1 grid-cols-1 gap-1 mt-1 ml-1 mr-1
        lg:grid-cols-2
      '>
        <Info />
        <Search changeTicker={changeTicker} findDataByTicker={findDataByTicker} ticker={ticker} />
        <DisplayData tickerData={selectedStock} dataEPS={dataEPS} />
      </div>
      <Footer />
    </div>
  )
}

export default App
