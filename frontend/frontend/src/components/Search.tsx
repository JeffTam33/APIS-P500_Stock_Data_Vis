import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { MdOutlineArrowDropDownCircle } from 'react-icons/md'

function Search(props: any) {

  const [visable, setVisable] = useState({
    className: 'hidden'
  })

  function search() {
    let value = (document.getElementById('search_stock') as HTMLInputElement | null)?.value;
    props.changeTicker(value!.toUpperCase())
  }

  function toggleDropDown() {
    console.log(visable)
    if(visable.className === 'hidden') {
      setVisable({className: 'visable'})
      return 
    } else {
      setVisable({className: 'hidden'})
    }
  }


  return (
    <div className='transition-colors duration-1000 bg-searchColor dark:bg-gray-900 rounded-xl max-h-max w-5/6 m-auto'>
      <div className='mt-1 ml-3 mr-3'>
        <div>
          <label
            className='block mb-2 font-mono text-xl text-gray-900 dark:text-white'
          >
            Stock Tickers/Co. Name
          </label>

          <div className='w-fit'>
            <input type="text" id='search_stock' className='float-left rounded-l-lg text-lg pl-1 p-1 font-mono font-semibold' placeholder={'Enter Ticker Here'} />
            <BiSearchAlt onClick={() => search()} className='float-left cursor-pointer bg-slate-300 rounded-r-lg duration-300 hover:bg-blue-400' size={36} />
          </div>

          <div className='font-mono text-base mb-2 text-white'>
            <p className=' w-fit mt-1 mb-2 font-mono text-xl text-white'>
              Examples
            </p>
            <p onClick={() => props.changeTicker('APPL')} className='cursor-pointer mt-4 duration-500 rounded-lg hover:text-blue-800 hover:bg-slate-200'>APPL, Apple Inc.</p>
            <p onClick={() => props.changeTicker('MSFT')} className='cursor-pointer mt-4 duration-500 rounded-lg hover:text-blue-800 hover:bg-slate-200'>MSFT, Microsoft</p>
            <p onClick={() => props.changeTicker('AMZN')} className='cursor-pointer mt-4 duration-500 rounded-lg hover:text-blue-800 hover:bg-slate-200'>AMZN, Amazon.com Inc.</p>
            <p onClick={() => props.changeTicker('GOOGL')} className='cursor-pointer mt-4 duration-500 rounded-lg hover:text-blue-800 hover:bg-slate-200'>GOOGL, Alphabet Inc. Class A</p>
            <p onClick={() => props.changeTicker('BRK.B')} className='cursor-pointer mt-4 duration-500 rounded-lg hover:text-blue-800 hover:bg-slate-200'>BRK.B, Berkshire Hathaway Inc. Class B</p>
            <p onClick={() => props.changeTicker('GOOG')} className='cursor-pointer mt-4 duration-500 rounded-lg hover:text-blue-800 hover:bg-slate-200'>GOOG, Alphabet Inc. Class C</p>
            <p onClick={() => props.changeTicker('UNH')} className='cursor-pointer mt-4 duration-500 rounded-lg hover:text-blue-800 hover:bg-slate-200'>UNH, UnitedHealth Group Incorporated</p>
            <p onClick={() => props.changeTicker('TSLA')} className='cursor-pointer mt-4 duration-500 rounded-lg hover:text-blue-800 hover:bg-slate-200'>TSLA, Tesla Inc</p>
            <p onClick={() => props.changeTicker('XOM')} className='cursor-pointer mt-4 duration-500 rounded-lg hover:text-blue-800 hover:bg-slate-200'>XOM, Exxon Mobil Corporation</p>
            <p onClick={() => props.changeTicker('JNJ')} className='cursor-pointer mt-4 duration-500 rounded-lg hover:text-blue-800 hover:bg-slate-200'>JNJ, Johnson & Johnson</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Search