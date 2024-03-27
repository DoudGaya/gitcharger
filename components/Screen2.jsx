'use client'
import React from 'react'
import { useState } from 'react'
import { Component1 } from './SecondScreens/Component1'
import { Component2 } from './SecondScreens/Component2'
import { Component3 } from './SecondScreens/Component3'
import { Component4 } from './SecondScreens/Component4'

const componentSlide = [
    {
        id: 1,
        component: <Component1 />
    },
    {
        id: 2,
        component: <Component2 />
    },
    {
        id: 3,
        component: <Component3 />
    },
    {
        id: 4,
        component: <Component4/>
    }
]




export const Screen2 = () => {

    const [currentComponentState, setCurrentComponentState] = useState(0)

    const nextSlide = () => {
       if (currentComponentState !== componentSlide.length - 1) {
        setCurrentComponentState((action) => {
            return action + 1
        })
       }
    }
    const prevSlide = () => {
       if (currentComponentState !== 0) {
        setCurrentComponentState((action) => {
            return action - 1
        })
       }

    }
  return (
    <div className=" rounded-[50px] drop-shadow-lg  h-[650px] flex flex-col text-gray-700 bg-[rgb(248,248,248)] border-[20px] border-white">
    <div className=" bg-white rounded-b-full w-2/4 h-5 mx-auto"></div>
    <div className=" flex py-2 px-3 items-center justify-between">
        <button onClick={prevSlide} className=" cursor-pointer ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>

        </button>
        <div className=" text-[.8rem] text-black font-semibold">Filters</div>
        <div className="text-[.8rem] text-gray-600">Reset</div>
    </div>
    <div className=' p-2 h-full flex flex-col space-y-4 py-10'>
    <div className=" flex w-full mx-auto space-x-0.5 items-center justify-center">
        {
            componentSlide.map(item => (<div key={item.id} className={`w-full py-0.5 rounded-full ${(item.id - 1) === currentComponentState ? 'bg-[rgb(40,163,39)]' : 'bg-gray-300'}`}></div>))
        }
    </div>
        {
            componentSlide[currentComponentState].component
        }
    <div className=" w-full flex mx-auto ">
        <button onClick={nextSlide} className={` py-1 shadow-md rounded-md w-full  ${currentComponentState === componentSlide.length - 1 ? ' bg-[rgb(40,163,39)] text-white' : 'border-gray-200'} bg-gray-200 rounded-sm border`}>{ currentComponentState === componentSlide.length - 1 ? 'Done' : 'Next' }</button>
    </div>
  </div>
 </div>
  )
}


