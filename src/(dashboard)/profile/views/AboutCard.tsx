import React from 'react'

const AboutCard = () => {
  return (
    <div className='bg-white flex flex-col rounded-lg p-12'>
      <div className="flex flex-col pb-3">
        <h1 className='text-blue-500 font-semibold text-[16px]'>PROFILE</h1>
        <h3 className='font-semibold text-[20px] pt-3'>Dr.William Lawson</h3>
        <p className='text-[14px] text-[#ababab]'>MS,M.Ch (Paediatric Surgeon)
            <br />
            Medic General Medical Hospital
            <br />
            North Houston, Texas, USA
        </p>
      </div>
      <div className="flex flex-col pt-3 pb-3">
        <div className="flex gap-12">
            <h1 className='text-blue-500 font-semibold text-[16px]'>SPECIALITY</h1>
            <p>Paediatric, Endoscopic, Leparoscopy, Thoracoscopy</p>
        </div>
        <div className="flex gap-12">
            <h1 className='text-blue-500 font-semibold text-[16px]'>EXPERIENCE</h1>
            <p>22 Years+</p>
        </div>
        <div className="flex gap-12">
            <h1 className='text-blue-500 font-semibold text-[16px]'>LANGUAGES</h1>
            <p>English, Spanish</p>
        </div>
        <div className="flex gap-12">
            <h1 className='text-blue-500 font-semibold text-[16px]'>TYPES OF</h1>
            <p>Full Time Physician</p>

      </div>
      </div>
      <div className="flex flex-col pt-4 pb-4">
        <h1 className='text-blue-500 font-semibold text-[16px]'>CONTACT</h1>
        <p className='border-l-4 pl-4 rounded-lg my-4 border-blue-500'>
            +2349023643820, +2349014535322
            <br />
            adedokunfemi14@gmail.component
            <br />
            www.webaddress.com
        </p>
        <p className='border-l-4 pl-4 rounded-lg border-blue-500'>
            Room 102, Student Wards
            <br />
            Health Center, OAU, Ile-Ife, Nigeria
        </p>
      </div>
    </div>
  )
}

export default AboutCard
