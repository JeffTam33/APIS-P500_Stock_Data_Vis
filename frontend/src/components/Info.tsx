import React from 'react'
const SOURCEURL = "https://www.investopedia.com/"
const EPSURL = "https://www.investopedia.com/terms/e/eps.asp#:~:text=Earnings%20per%20share%20(EPS)%20is%20a%20company's%20net%20profit%20divided,metric%20for%20estimating%20corporate%20value."
const EEURL ="https://www.investopedia.com/terms/e/earningsestimate.asp#:~:text=our%20editorial%20policies-,What%20Is%20an%20Earnings%20Estimate%3F,attempting%20to%20value%20a%20firm."

function Info(props) {

  let arr = props.names

  return (
    <div className='bg-infoColor dark:bg-zinc-800 text-white rounded-xl overflow-y-scroll scrollbar h-5/6 w-5/6 m-auto'>
      <div className='mt-1 ml-3'>
        <p className='text-2xl'>Instructions</p>
        <p className='text-xl'>Enter the stock ticker symbol or company name</p>
        <p>Click on the search button to find the stock's histroy of beating earnings</p>
        <br />
        <p className='text-2xl'>Earnings and Earnings Per Share (EPS)</p>
        <p>Definitions and explainations are sourced from&nbsp;
          <a className='text-blue-500 hover:border-b-2' 
            href={SOURCEURL}
          > 
            investopedia
          </a>
        </p>
        <p className='text-base'>
          &emsp; A company's earnings are its after-tax net income. This is the company's bottom line or its profits.&nbsp;
          <a className='text-blue-500 hover:border-b-1'
            href={EPSURL} 
          >
            Earnings per share (EPS)
          </a>
          &nbsp;is a company's net profit divided by the number of common shares it has outstanding.
          Publicly traded companies usually report quarterly on their earnings publically to their investors  
          (sometimes annual basis). 
          High EPS indicates the company has greater corporate value, while low EPS would indicate lower corporate value.
          EPS is a relevant measurement for investors about the price of the stock. Although a report of high EPS or 
          low EPS does always predict the price of a stock. 
        </p>
        <br />
        <p className='text-2xl'>Earnings Estimate</p>
        <p className='text-base'>
          &emsp; An earnings estimate is an analyst's estimate for a company's future quarterly or annual earnings per share (EPS).
          For investors,&nbsp;
          <a className='text-blue-500 hover:border-b-1'
            href={EEURL} 
          >
            earnings estimate
          </a>
          &nbsp;are used as an expectation of how the company's performance might affect the stock price.
          Along with EPS, investors compare EPS to the estimated earnings as a response to the company's stock price. If a company's EPS exceeds the earnings estimate, 
          it is a beat in earnings. When EPS is lower than the estimate, it is a miss in earnings. 
        </p>
        <p>
          &nbsp;When earnings and estimate closely or match in value, the comparison is that the earnings are met expectations. Stocks become volatile 
          to the upcoming company's earnings date, as many investors attempt to predict the market's reaction to the earnings and 
          earnings estimate.
        </p>
      </div>
    </div>
  )
}

export default Info