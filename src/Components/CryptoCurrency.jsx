import millify from 'millify'
import React from 'react'

const CryptoCurrency = ({currency}) => {
  return (
    <div className='w-full sm:w-[49%] md:w-[24%] p-5 hover:shadow-md cursor-pointer bg-white dark:bg-secondary-dark-bg rounded-md'>
        <div className="flex justify-between items-center">
            <h1 className='text-lg font-semibold dark:text-gray-100 text-dark-900 '>{currency?.rank}.{currency.name}</h1>
            <img src={currency?.iconUrl} className='w-10 h-10 rounded-full' alt="Crypto Image" />
        </div>
        <div className="flex flex-col gap-3 items-start my-5">
            <h1 className='text-sm dark:text-gray-200 text-gray-600'>Price:{millify(currency?.price)}</h1>
            <h1 className='text-sm dark:text-gray-200 text-gray-600'>Market Cap:{millify(currency?.marketCap)}</h1>
            <h1 className='text-sm dark:text-gray-200 text-gray-600'>Daily Change:{millify(currency?.change)}</h1>
        </div>
    </div>
  )
}

export default CryptoCurrency