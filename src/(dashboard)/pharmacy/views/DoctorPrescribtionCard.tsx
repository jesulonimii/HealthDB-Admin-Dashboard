import React from 'react'
import CardLayout from '@/src/shared/ui/CardLayout'
import AvatarImage from '@/src/shared/ui/AvatarImage'

const data = [
  {
    name: "Adedokun Femi",
    regNum: "CSC/2019/113",
    date: "08/12/2023",
    time: "7:50pm"
  },
  {
    name: "Williams",
    regNum: "CSC/2019/110",
    date: "08/12/2023",
    time: "7:50pm"
  }
]

const DoctorPrescribtionCard = () => {
  return (
    <div className='flex flex-col'>
      <CardLayout className="w-full min-h-[75vh] flex p-5 flex-grow">
        <div className="flex flex-col gap-3 justify-between">
          <p className="font-outfit text-lg text-center pb-4 font-medium">Students</p>
          {data.map((item, index) => (

            <div className='flex gap-4 cursor-pointer bg-gray-100 rounded-lg hover:bg-gray-50 p-3 border-b justify-between items-center'>
              <AvatarImage src=''  className="w-12 h-12" />

              <div className="w-[50%] gap-1 justify-center flex flex-col">
                <p className="font-medium text-lg font-outfit">{item.name}</p>
                <p className="text-gray-700">
                  {item.regNum}
                </p>
              </div>

              <div className={`w-[40%]  h-full gap-2 justify-center items-end flex flex-col`}>
                <p className="text-sm text-gray-500 text-end h-[50%]">{item.date}</p>
                <span
                  className={`h-[50%] font-medium bg-opacity-20 px-3 w-fit flex justify-center rounded-lg bg-primary text-primary`}>
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>

			
		  </CardLayout>
    </div>
  )
}

export default DoctorPrescribtionCard
