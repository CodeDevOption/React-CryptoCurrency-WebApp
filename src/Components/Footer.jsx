import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full  bg-gray-200 dark:bg-secondary-dark-bg flex flex-col justify-center dark:text-gray-200 text-gray-900 items-center p-5'>
      <h1  className='font-medium text-md'>CryptoNexus</h1>
      <h2 className='font-semibold text-lg'>2023 All Right Reserved </h2>
      <div className="flex gap-2 text-blue-700 dark:text-blue-300 font-medium">
        <Link className='hover:underline' to='/'>Home</Link>
        <Link className='hover:underline' to='/exchange'>Exchange</Link>
        <Link className='hover:underline' to='/news'>News</Link>
      </div>
    </div>
  )
}

export default Footer