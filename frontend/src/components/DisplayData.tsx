import React, { useState, useEffect } from 'react'
import DataVis from './DataVis'

function DisplayData(props) {

  return (
    <div className='transition-colors duration-1000 bg-dataColor dark:bg-stone-400 text-white rounded-xl h-fit w-fit p-10 m-10
      lg:w-full
      lg:h-full
    '>
      <div className=''>
        <p className='text-4xl mb-5'>
          Past Earnings Results: {props.dataEPS ? props.tickerData.ticker + ", " + props.tickerData.name : ''}
        </p>
        <DataVis dataEPS={props.dataEPS} />
      </div>
    </div>
  )
}

export default DisplayData