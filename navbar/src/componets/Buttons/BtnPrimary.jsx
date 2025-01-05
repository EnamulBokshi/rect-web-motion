import React from 'react'

function BtnPrimary({children}) {
  return (
    <button className='rounded-lg px-6 py-2 bg-violet-900 text-white'>
        {children}
    </button>
  )
}

export default BtnPrimary