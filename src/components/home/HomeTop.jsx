import React from 'react'
import Video from './Video'

const HomeTop = () => {
  return (
    <div className='font-[laura300} '>
      <div className='flex items-center justify-center text-[10vw] leading-[8.5vw] uppercase'>L'étincelle</div>
      <div className='text-[10vw] leading-[8.5vw] uppercase flex items-center justify-center'>qui <div className='h-[8vw] w-[16vw] mx-2 overflow-hidden rounded-full'>
        <Video />
        </div> génère</div>
      <div className='flex items-center justify-center text-[10vw] leading-[8.5vw] uppercase'>la créativité</div>
    </div>
  )
}

export default HomeTop