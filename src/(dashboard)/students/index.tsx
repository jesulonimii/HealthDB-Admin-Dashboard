import React from 'react'
import AllergiesCard from './views/AllergiesCard'
import DrugUsedCard from './views/DrugUsedCard'
import GeneralProfileCard from './views/GeneralProfileCard'
import MainProfileCard from './views/MainProfileCard'


const Students = () => {
  return (
        <div className="flex w-full p-12 md:p-4 h-fit pb-16 min-h-[80vh] flex-col gap-14 flex-grow">
			<section className="w-full gap-6 flex flex-col md:flex-row h-full ">
				<section className="w-full md:w-[25%] h-fit gap-6 flex flex-col">
					<MainProfileCard />

					<AllergiesCard />
				</section>

				<div className="w-full flex flex-col gap-6 md:w-[75%] flex-grow min-h-full">
                    <GeneralProfileCard />

				    <DrugUsedCard />
				</div>
			</section>
		</div>
  )
}

export default Students
