"use client"
import React, {useState} from 'react'
import { Messages } from './Messages'
import { Friends } from './Friends'
// @ts-ignore
import { messages } from '@/db.tsx'

import { Notifications } from './Notifications'


const components = [
  {
    name: "messages",
    component: <Messages messages={messages} />
  },
  {
    name: 'friends',
    component: <Friends />
  },
  {
    name: 'notifications',
    component: <Notifications />
  }
]



const Screen1 = () => {

  const [activeComponent, setActiveComponent] = useState<number>(0 )


  const changeActiveComponent = (current: number): any => {
    
    if (activeComponent !== current) {
        setActiveComponent(current)
    }
  }


  return (
   <div className=" rounded-[50px] drop-shadow-lg  h-[650px] flex flex-col text-gray-700 bg-[rgb(248,248,248)] border-[20px] border-white">
      <div className=" bg-white rounded-b-full w-2/4 h-5 mx-auto"></div>
     <div className=' p-2'>

      <div className=" py-6 px-2">
        <div className=" p-0.5 text-xs rounded-md align-middle items-center grid grid-cols-3 bg-[rgb(232,232,233)]">
              <button onClick={() => changeActiveComponent(0)} className={`left-0.5 flex ${ activeComponent == 0 && 'bg-white rounded-sm '} items-center border-r-1 justify-center p-0.5`}> 
                    <span>Messages</span>
              </button>
              <button onClick={() => changeActiveComponent(1)} className={`left-0.5 flex ${ activeComponent == 1 && 'bg-white rounded-sm '} items-center border-r-1 justify-center p-0.5`}>
                    <span>Notifications</span>
              </button>
              <button onClick={() => changeActiveComponent(2)} className={`left-0.5 flex ${ activeComponent == 2 && 'bg-white rounded-sm '} items-center border-r-1 justify-center p-0.5`}>
                    <span>Friends</span>
              </button>
          </div>
          <div className=" py-3">
            <div className=" w-full bg-white rounded-md flex space-x-2 items-center px-2 flex-row border-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 stroke-gray-700 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            <input type="text" placeholder='Username, Vehicle' className=' focus:outline-none text-gray-600 caret-gray-500 text-sm py-0.5 w-full bg-transparent' />
            </div>
          </div>
          <div className="">
            {
              components[activeComponent].component
            }
          </div>
      </div>
    </div>
   </div>
  )
}

export default Screen1