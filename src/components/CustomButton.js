import React from 'react'

const CustomButton = ({ children }) => {
  return (
    <button className='capitalize bg-gradient-to-r from-[#4066ff] from-97% to-[#2949c6]  py-2 px-6 rounded-md text-white hover:scale-[107%] duration-300 ease-out focus:scale-[95%] focus:opacity-80 transition-transform text-sm font-medium'>
      {children}
    </button>

  )
}

export default CustomButton