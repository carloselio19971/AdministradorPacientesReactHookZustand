import React from 'react'

export const Error = ({children}:{children:React.ReactNode}) => {
  return (
    <p className='text-center my-4 bg-red-600 p-3 text-white font-bold uppercase text-sm'>{children}</p>
  )
}
