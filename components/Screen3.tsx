
import { connectorsNames } from '@/db'


const Screen3 = () => {


    return (
   <div className=" rounded-[50px] drop-shadow-lg  h-[650px] flex flex-col text-gray-700 bg-[rgb(248,248,248)] border-[20px] border-white">
      <div className=" bg-white rounded-b-full w-2/4 h-5 mx-auto"></div>
     <div className=' p-2'>
        <div className=" grid grid-cols-3 items-center ">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>
            <div className=" text-[.8em] flex-none w-full col-span-2 font-semibold">Connector type</div>
           
        </div>
      <div className=" py-6 px-2">
          <div className=" py-3">
            <div className=" w-full bg-white rounded-md flex space-x-2 items-center px-2 flex-row border-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 stroke-gray-700 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            <input type="text" placeholder='Username, Vehicle' className=' focus:outline-none text-gray-600 caret-gray-500 text-sm py-0.5 w-full bg-transparent' />
            </div>
          </div>
        <div className=" grid grid-cols-2 gap-4">
            {
                connectorsNames.map((connector) => <Connector key={connector.id} connector={connector} />)
            }
        </div>
      </div>
    </div>
   </div>
  )
}

export default Screen3

const Connector = ( {connector}: any ) => {


    return (
        <button className={`${connector.selected ? ' bg-[rgb(214,236,255)] ' : 'bg-[rgb(253,253,253)] '}border space-y-2 border-gray-200 items-center flex flex-col justify-center rounded-md px-4 py-6`}>
            <div className="">
                {connector.svg}
            </div>
            <p className=' text-[0.7em]'>{connector.name}</p>
        </button>
    )
}