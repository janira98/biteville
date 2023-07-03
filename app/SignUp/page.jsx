import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <div className='bg-white flex flex-col justify-center items-center min-w-[400px] drop-shadow-mealShadow my-8 p-[20px] gap-[70px]'>
          <h2 className='font-bold text-[39px] '>Sign Up</h2>
          <div className='flex flex-col w-full gap-[25px]'>
            <input type="text" placeholder='Enter your phone number' className='border-solid border-brandRed border-2 rounded-[8px] p-[8px] focus:border-brandRed focus:focus:outline-none ' />
            <input type="password" placeholder='Password' name="" id="" className='border-solid border-brandRed border-2 rounded-[8px] p-[8px] focus:border-brandRed focus:focus:outline-none '/>
            <input type="password" placeholder='Re-Enter password' name="" id="" className='border-solid border-brandRed border-2 rounded-[8px] p-[8px] focus:border-brandRed focus:focus:outline-none '/>
            <input type="text" placeholder='Enter the OTP Code' className='border-solid border-brandRed border-2 rounded-[8px] p-[8px] focus:border-brandRed focus:focus:outline-none ' />
            <button className='bg-brandRed w-full text-white px-[10px] py-[10px] rounded-[8px] hover:drop-shadow-btnShadow transition duration-200 ease-in-out'>Sign Up</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default page