import React from 'react'

const GeneralProfileCard = () => {
  return (
    <div className='flex flex-col gap-5 bg-white rounded-lg p-9'>
        <h1 className='text-[#999999] text-[20px] pb-2 '>PERSONAL DETAILS</h1>
      <div className="flex justify-between mb-5">
        <div className="flex flex-col gap-1">
            <h1 className='text-[#999999]'>Last Name</h1>
            <p className='font-semibold'>Jones</p>
        </div>
        <div className="flex flex-col gap-1">
            <h1 className='text-[#999999]'>First Name</h1>
            <p className='font-semibold'>Janet</p>
        </div>
        <div className="flex flex-col gap-1">
            <h1 className='text-[#999999]'>Salutation</h1>
            <p className='font-semibold'>Nil</p>
        </div>
        <div className="flex flex-col gap-1">
            <h1 className='text-[#999999]'>Birthday</h1>
            <p className='font-semibold'>12/12/2001</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col  gap-1">
            <h1 className='text-[#999999]'>Matric No</h1>
            <p className='font-semibold'>CSC/2030/001</p>
        </div>
        <div className="flex flex-col gap-1">
            <h1 className='text-[#999999]'>Faculty</h1>
            <p className='font-semibold'>Technology</p>
        </div>
        <div className="flex flex-col gap-1">
            <h1 className='text-[#999999]'>Department</h1>
            <p className='font-semibold'>Computer Science and Engineering</p>
        </div>
        <div className="flex flex-col gap-1">
            <h1 className='text-[#999999]'>Level</h1>
            <p className='font-semibold'>200</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col  gap-1">
            <h1 className='text-[#999999]'>Address</h1>
            <p className='font-semibold'>Room 102, Moremi Hall, OAU, Ile-Ife</p>
        </div>
        <div className="flex flex-col gap-1">
            <h1 className='text-[#999999]'>Email</h1>
            <p className='font-semibold'>adedokunfemi14@gmail.com</p>
        </div>
        <div className="flex flex-col gap-1">
            <h1 className='text-[#999999]'>Phone Number</h1>
            <p className='font-semibold'>+2349023643820</p>
        </div>
      </div>
      <div className="mt-5">
        <h1 className='text-[#999999] text-[20px] pb-2'>Notes</h1>
        <p> <span className='font-semibold'>Knee pain, headache, fever </span>last time he look sicks</p>
      </div>
    </div>
  )
}

export default GeneralProfileCard
