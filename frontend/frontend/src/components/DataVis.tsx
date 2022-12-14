import React, { useState, useEffect } from 'react'
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function DataVis(props : any) {
  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Past Earnings',
      }
    }
    
  }

  let labels = [
    props.dataEPS[0][0],
    props.dataEPS[1][0],
    props.dataEPS[2][0],
    props.dataEPS[3][0],
    props.dataEPS[4][0],
    props.dataEPS[5][0],
    props.dataEPS[6][0],
  ]
    
  let data = {
    labels,
    datasets: [
      {
        label: 'Estimate',
        data: [
          props.dataEPS[0][1].Estimate,
          props.dataEPS[1][1].Estimate,
          props.dataEPS[2][1].Estimate,
          props.dataEPS[3][1].Estimate,
          props.dataEPS[4][1].Estimate,
          props.dataEPS[5][1].Estimate,
          props.dataEPS[6][1].Estimate
        ],
        backgroundColor: 'rgba(233, 59, 74)',
      },
      {
        label: 'Actual',
        data: [
          props.dataEPS[0][1].Actual,
          props.dataEPS[1][1].Actual,
          props.dataEPS[2][1].Actual,
          props.dataEPS[3][1].Actual,
          props.dataEPS[4][1].Actual,
          props.dataEPS[5][1].Actual,
          props.dataEPS[6][1].Actual,
        ],
        backgroundColor: 'rgba(74, 211, 114)',
      },
    ],
  }

  return (
    <div className='w-96'>
      <Bar className='w-96' height={"230%"} width={"330%"} options={options} data={data}  />
    </div>
  )
}

export default DataVis