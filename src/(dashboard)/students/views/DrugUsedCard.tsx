import React from 'react'

const data = [
    {id:1, brandName: "Apo-Ciproflux", genericName: "Ciprofloxacibe Hydrochloroc", strength: "500mg", pack:"100", form:'Syrup', manufacturer: "Apotex Industries"},
    {id:2, brandName: "Acetamonophen", genericName: "Acetamoniphen", strength: "250mg", pack:"50", form:'Capsule', manufacturer: "Pemigo Company"},
    {id:3, brandName: "Amoxicillin", genericName: "Amoxicillin", strength: "300mg", pack:"15", form:'Tablet', manufacturer: "Dr Femi's Lab"},
]

const DrugUsedCard = () => {
  return (
    <div className='bg-white rounded-lg flex flex-col p-8'>
        <h1 className='text-[#999999] text-[20px]'>Used Drugs</h1>
        
        <div className="flex justify-between  mb-5">
        <div className="flex flex-col gap-4">
            <h1 className='text-[#999999]'>Brand Name</h1>
            {data.map((item, id) => (
                <p className='font-semibold'>{item.brandName}</p>
            ))}
        </div>
        <div className="flex flex-col gap-4 ">
            <h1 className='text-[#999999]'>Generic Name</h1>
            {data.map((item, id) => (
                <p className='font-semibold'>{item.genericName}</p>
            ))}
        </div>
        <div className="flex flex-col gap-4">
            <h1 className='text-[#999999]'>Strength</h1>
            {data.map((item, id) => (
                <p className='font-semibold'>{item.strength}</p>
            ))}
        </div>
        <div className="flex flex-col gap-4">
            <h1 className='text-[#999999]'>Pack</h1>
            {data.map((item, id) => (
                <p className='font-semibold'>{item.pack}</p>
            ))}
        </div>
        <div className="flex flex-col gap-4">
            <h1 className='text-[#999999]'>Form</h1>
            {data.map((item, id) => (
                <p className='font-semibold'>{item.form}</p>
            ))}
        </div>
        <div className="flex flex-col gap-4">
            <h1 className='text-[#999999]'>Manufacturer</h1>
            {data.map((item, id) => (
                <p className='font-semibold'>{item.manufacturer}</p>
            ))}
        </div>
      </div>
    </div>
  )
}

export default DrugUsedCard
