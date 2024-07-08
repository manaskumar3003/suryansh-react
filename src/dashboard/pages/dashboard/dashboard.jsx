import React from 'react'
import Topcard from './topcard'
import Transaction from './transaction'
import ChartApp from '../../usercomp/charts/area'




const Dashboard = () => {
  return (
    <div class="pl-24 h-full dark w-full bg-gray-100">
      <Topcard />

      {/* transaction and charts */}
      <div class="grid grid-cols-2 gap-2">
        <div class="ml-8 pr-20"><Transaction /></div>
        <div class="pr-10"><ChartApp/></div>
      </div>
      

    </div>
  )
}

export default Dashboard


