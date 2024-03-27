import { selectedItems } from '@/db'
import Image from 'next/image'
import car from '@/app/car.png'
import React from 'react'

export const Component1 = () => {
  return (
    <div className=" flex-col flex rounded-md ">
      {
        selectedItems.map(selected => <SelectedComponent selected={selected} key={selected.name} />)
      }
      <div className=" flex flex-col">
        <Image width={1000} height={1000} className=' w-4/5 mx-auto  py-10' src={car} alt='Car Image' />
      </div>
      <div className=" flex flex-col">
        <div className=" w-full flex flex-col ">
            <p className=' font-semibold text-[.7em]'>Maufacturer</p>
            <input placeholder='Manufacturer' className={` px-2 text-[.8em] py-2 bg-gray-100 outline-none rounded-md w-full text-white' 'border-gray-200'} bg-gray-200 rounded-sm border`} />
        </div>
        <div className=" w-full flex flex-col ">
            <p className=' font-semibold text-[.7em]'>Maufacturer</p>
            <input disabled placeholder='Model' className={` px-2 text-[.8em] py-2 bg-gray-200 outline-none rounded-md w-full text-white' 'border-gray-200'} bg-gray-200 rounded-sm border`} />
        </div>
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
