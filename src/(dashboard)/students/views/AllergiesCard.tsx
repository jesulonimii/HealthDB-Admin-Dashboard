import React from 'react'

const AllergiesCard = () => {
  return (
    <div className='bg-white rounded-lg flex flex-col items-center justify-center p-8'>
      <h2 className='text-[#999999] text-[20px] '>Allergies</h2>
      <div className="max-w-md bg-white p-3 text-center ">
        <div className="flex gap-6 mb-4">
            <span className="w-1/4 text-gray-700 mr-10 font-bold">Penicillin:</span>
            <span className="w-3/4 text-red-700 font-semibold">High</span>
        </div>
        <div className="flex mb-4">
            <span className="w-1/4 text-gray-700 mr-10 font-bold">Tilorone:</span>
            <span className="w-3/4 text-blue-700 font-semibold">Medium</span>
        </div>
        </div>
    </div>
  )
}

export default AllergiesCard
