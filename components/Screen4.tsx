'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { Component1 } from './fourthScreens/Component1'
import { Component2 } from './fourthScreens/Component2'
import { Component3 } from './fourthScreens/Component3'
import { Component4 } from './fourthScreens/Component4'

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


export const Screen4 = () => {

    const [currentComponentState, setCurrentComponentState] = useState(0)
    const interval = 2000

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentComponentState !== componentSlide.length - 1) {
             setCurrentComponentState((action) => {
                 return action + 1
             })
            } else {
             setCurrentComponentState(0)
            }
         }, interval);

        return () => clearInterval(intervalId);
      }, [currentComponentState, interval]);

  return (
    <div className=" rounded-[50px] drop-shadow-lg  h-[650px] flex flex-col text-gray-700 bg-[rgb(248,248,248)] border-[20px] border-white">
    <div className=" bg-white rounded-b-full w-2/4 h-5 mx-auto"></div>
   
    <div className=' p-2 h-full flex flex-col space-y-4 py-10'>
   
        {
            componentSlide[currentComponentState].component
        }

<div className=" flex space-x-0.5 items-center mx-auto justify-center">
        {
            componentSlide.map(item => (<div key={item.id} className={` w-4 py-0.5 rounded-full ${(item.id - 1) === currentComponentState ? 'bg-[rgb(40,163,39)]' : 'bg-gray-300'}`}></div>))
        }
    </div>
    <div className=" w-full flex mx-auto flex-col space-y-2 pt-20 ">
        <button className={` py-2 text-[.7rem] shadow-md rounded-md w-full bg-[rgb(40,163,39)] text-white border`}>Sign Up</button>
        <button className={` py-2 text-[.7rem] shadow-md rounded-md w-full bg-[rgba(143,222,143,0.7)] text-green-600 border`}>Log In</button>
    </div>
  </div>
 </div>
  )
}


