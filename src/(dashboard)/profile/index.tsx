import React from 'react'
import AboutCard from './views/AboutCard'
import Picturecard from './views/Picturecard'


const Profile = () => {
  return (
    <div className='flex w-full p-12 md-p-4 h-fit pb-16 min-h-[80vh] gap-8'>
      <div className="w-full md:w-[30%] h-fit"><Picturecard /></div>
      <div className="w-full gap-6 md:w-[70%] min-h-full"><AboutCard /></div>
    </div>
  )
}

export default Profile
