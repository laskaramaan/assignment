import React from 'react'
import { ClipboardListIcon, ClockIcon } from '@heroicons/react/outline'

const data=[
    {
        img:"https://flowbite.com/docs/images/blog/image-1.jpg",
        name:"XYZ",
        event:"Draft",
        lastdate:"4/08/22",
        lessons:"1",
        minutes:"13",
        keywords:[
            {
             name:"Marketing"
            }
        ]
    },
    {
        img:"https://flowbite.com/docs/images/blog/image-1.jpg",
        name:"Sales vs marketing",
        event:"Archived",
        lastdate:"4/08/22",
        lessons:"3",
        minutes:"25",
        keywords:[
            {
             name:"Sales"
            },
            {
             name:"Marketing"
            }
        ]
    },
    {
        img:"https://flowbite.com/docs/images/blog/image-1.jpg",
        name:"how to unclog a Sink",
        event:"Live",
        lastdate:"4/08/22",
        lessons:"6",
        minutes:"15",
        keywords:[
            {
             name:"Sales"
            }
        ]
    },
    {
        img:"https://flowbite.com/docs/images/blog/image-1.jpg",
        name:"how google Analytics Ruined marketing",
        event:"Live",
        lastdate:"4/08/22",
        lessons:"3",
        minutes:"25",
        keywords:[
            {
             name:"Sales"
            }
        ]
    }
]
export default function Card() {
  return (
    <div className='grid grid-cols-1 pb-8 2xl:grid-cols-4 bg-gray-100 select-none md:gap-x-8 gap-y-8 md:grid-cols-3 px-8'>
    {data.map((datas) =>(
    <div key={datas.name} class="relative overflow-hidden border-black bg-white border-2">
    <img className="w-full" src={datas.img} alt="Sunset in the mountains"/>
    <p className='absolute p-1 text-sm font-medium text-white uppercase top-0 right-0 m-2 bg-gray-500 bg-opacity-40'>{datas.event}</p>
    <div class="px-6 py-4">
      <div class="font-bold text-xl pb-2">{datas.name}</div>
      <p class="text-gray-700 text-sm ">
        Last updated : {datas.lastdate}
      </p>
      <div className='flex gap-x-4'>
      <p className='flex pt-4 text-gray-500 items-center font-medium'>
      <ClipboardListIcon className="flex-shrink-0 h-4 w-4" aria-hidden="true" />
      <span className="ml-1 text-sm">Lessons : {datas.lessons}</span>
      </p>
      <p className='flex pt-4 text-gray-500 items-center font-medium'>
      <ClockIcon className="flex-shrink-0 h-4 w-4" aria-hidden="true" />
      <span className="ml-1 text-sm">Minutes : {datas.minutes}</span>
      </p>
      </div>
    </div>
    <div class="px-6 pb-4">
    {datas.keywords.map((keyword) =>(
      <span key={keyword.name} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{keyword.name}</span>
    ))}
    </div>
  </div>
    ))}

    </div>
  )
}