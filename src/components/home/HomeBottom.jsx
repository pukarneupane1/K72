import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='uppercase font-[laura500] flex items-center justify-center gap-2'>
      <Link className='leading-[6vw] text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50]  border-3 border-white rounded-full pt-1 px-10 ' to="/projects" >Projects</Link>
      <Link className='leading-[6vw] text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50]  border-3 border-white rounded-full pt-1 px-10  ' to="/agence" >Agence</Link>
    </div>
  )
}

export default HomeBottom