import React from 'react'

const Footer = () => {
  return (
      <div>
          <div className='flex justify-between items-end'>
            <div className='mt-3'>
                <h4 className='font-semibold mb-2'>Open Hours</h4>
                <h4>7 a.m. - 10 p.m on Mon to Fri</h4>
                <h4>7 a.m. - 12 p.m on Weekends</h4>
            </div>
            <div>
                <h4 className='font-light text-[13px]'>© 2023 Biteville</h4>
            </div>
            <div className='text-right'>
                <h4 className='font-semibold mb-2'>Contact Us</h4>
                <h4>0123456789</h4>
                <h4>biteville@gmail.com</h4>
            </div>
          </div>
          
    </div>
  )
}

export default Footer