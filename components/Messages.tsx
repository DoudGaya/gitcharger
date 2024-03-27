import Image from 'next/image'
import React from 'react'


const SingleMessageComponent = ({ message }: any) => {
    return (
        <button className=" flex flex-row space-x-1 hover:bg-gray-200 cursor-pointer rounded-md py-3 items-center border-b px-2">
            <div className=" h-10 w-10 flex-none bg-purple-500 rounded-full">
                <Image src={message.userProfile} alt='' className=' object-cover object-center rounded-full w-full h-full' />
            </div>
            <div className=" flex flex-col w-full"> 
                <div className=" flex justify-between items-center">
                <p className=' text-xs'>{message.name}</p>
                    <small className=' text-xs text-gray-400'>1:23</small>
                </div>
                <div className=" flex justify-between items-center">
                    <small className='text-xs text-[0.6em] truncate'>{ message.message && message.message[0]?.message1}</small>
                    { message.message.length > 0 &&
                        <p className=' px-1 text-[0.7em] text-center items-center justify-center text-white rounded-full bg-[rgb(40,148,240)]'>{message.message.length}</p>
                    }
                </div>
            </div>
        </button>
    )
}

export const Messages = ({messages}: any) => {
  return (
    <div className=' w-full  flex flex-col'>
       {
        messages.map((message: any) => <SingleMessageComponent message={message} key={message.id} /> )
       }
    </div>
  )
}
