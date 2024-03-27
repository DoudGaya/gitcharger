import { selectedItems } from '@/db'
import Image from 'next/image'
import car from '@/app/car.png'
import React from 'react'

export const Component1 = () => {
  return (
    <div className=" flex-col flex items-center rounded-md ">
      <div className=" w-[200px] h-[200px] pt-10 rounded-full bg-purple-500">
      
      </div>
      <div className=" flex items-center justify-center px-6 pt-6 flex-col">
        <p className=' font-semibold text-[.9rem]'>Find Charging Location</p>
        <p className=' text-center text-[.8rem]'>Save time by finding the best charging stattion that match your vehicle and preference. </p>
      </div>
    </div>
  )
}



const SelectedComponent = ({selected}: any) => {
 return (
    <div className=" flex items-center px-3 border-b py-3 justify-between">
      <div className=" flex flex-col align-middle justify-center">
        <div className=" text-[.8em]">{selected.name} <span className=' bg-green-400/50 px-2 text-[.7em] text-green-800 rounded-full'>{selected.selected == 1 ? 'selected' : ` ${selected.selected} Selected`}</span> </div>
        <p className=' text-[.6em] text-gray-600'>{selected.message}</p>
    </div>
    <button className=''>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5   h-5  ">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    </button>
  </div>
 )
}
