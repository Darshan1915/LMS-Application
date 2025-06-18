import React from 'react'
import { assets } from '../../assets/assets'

function Companies() {
  return (
    <>
    <div className='flex flex-col items-center justify-center my-10'>
      <div className='flex p-4 text-sm text-gray-500'>
        <h1>Trusted by learners from </h1>
      </div>
      <div className='flex flex-wrap gap-8 p-4'>
        <img src={assets.microsoft_logo} alt='CompanyLogo' className='w-20 md:w-28'></img>
        <img src={assets.walmart_logo} lt='CompanyLogo'></img>
        <img src={assets.accenture_logo} lt='CompanyLogo'></img>
        <img src={assets.adobe_logo} lt='CompanyLogo'></img>
        <img src={assets.paypal_logo} lt='CompanyLogo'></img>
      </div>
    </div> 
    </>
  )
}

export default Companies
