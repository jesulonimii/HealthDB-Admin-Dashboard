import React from 'react'

const Picturecard = () => {
  return (
    <div className='bg-white rounded-lg'>
        <div className=" p-6 pb-0 flex flex-col items-center">
            <img className='w-[250px] h-[240px] rounded-lg' src={'/kunle.png'} alt="" />
        </div>
        <div className="bg-blue-700 w-[90%] text-center p-2 flex flex-col m-auto rounded-lg">
            <h1 className='text-white text-4xl font-bold'>Dr William</h1>
            <p className='text-white text-2xl '>Paediatrics Surgeon</p>
        </div>
        <div className="flex flex-col items-start p-8">
            <h1 className='text-blue-500 font-semibold text-[16px] '>BIOGRAPHY</h1>
            <p className='pt-4 text-[12px] text-grey-500'>Dr.William Dawson is a board certified pediatrician at The Center for Children and Women-Greepoint
                <br />
                He Completed her medical training at the Louisana State University School of Medicine in New Orleans
            </p>
        </div>
    </div>
  )
}

export default Picturecard
