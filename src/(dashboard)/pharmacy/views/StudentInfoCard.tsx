import React from 'react'
import CardLayout from '@/src/shared/ui/CardLayout'
import AvatarImage from '@/src/shared/ui/AvatarImage'
import CustomButton from '@/src/shared/ui/forms/CustomButton'

const StudentInfoCard = () => {
  return (
    <CardLayout className="w-full min-h-[75vh] flex p-5 flex-grow">
			
      <div className="flex flex-col gap-3 justify-between">
          <p className="font-outfit text-lg text-center pb-4 font-medium">Drugs</p>

            <div className='flex gap-4 cursor-pointer rounded-lg bg-gray-50 p-3 border-b justify-between items-center'>
              <AvatarImage src=''  className="w-12 h-12" />
              <div className="gap-1 justify-center flex flex-col">
                <p className="font-medium text-lg font-outfit">Adedokun Femi</p>
              </div>
              <div className={` h-full gap-2 justify-center items-end flex flex-col`}>
                <p className="text-sm text-gray-500 text-end h-[50%]">date</p>
                <span
                  className={`h-[50%] font-medium bg-opacity-20 px-3 w-fit flex justify-center rounded-lg bg-primary text-primary`}>
                  time
                </span>
              </div>

            </div>

            <div className="flex flex-col gap-3 items-center mt-3 justify-center">
              <textarea className='border rounded-lg w-[70%] h-[250px]'></textarea>
              <CustomButton>Send Prescribtion</CustomButton>
            </div>
        </div>
			
		</CardLayout>
  )
}

export default StudentInfoCard
