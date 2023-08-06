import React from 'react'

const MainProfileCard = () => {
  return (
    <div className='flex flex-col bg-white rounded-lg p-3 justify-center items-center'>
      <div className=" flex justify-center flex-col items-center pt-3">
        <img className='w-[150px] h-[150px] rounded-lg' src={'/janet.png'} alt="" />
        <h3 className='text-2xl font-outfit font-extrabold p-2'>Janet Jones</h3>
        <p className=' text-green-500'>Active</p>
      </div>
      <div className="max-w-md mx-auto bg-white p-3 text-center">
        <div className="flex gap-6 mb-4">
            <span className="w-1/4 text-gray-700 font-bold">Gender:</span>
            <span className="w-3/4 text-gray-900">Female</span>
        </div>
        <div className="flex mb-4">
            <span className="w-1/4 text-gray-700 font-bold">Age:</span>
            <span className="w-3/4 text-gray-900">21</span>
        </div>
        <div className="flex gap-12 mb-4">
            <span className="w-1/4 text-gray-700 font-bold">Language:</span>
            <span className="w-3/4 text-gray-900">English</span>
        </div>
        <div className="flex gap-7">
            <span className="w-1/4 text-gray-700 font-bold">Height:</span>
            <span className="w-3/4 text-gray-900">700cm</span>
        </div>
        </div>
    </div>
  )
}

export default MainProfileCard
