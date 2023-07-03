'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCircle } from '@fortawesome/free-solid-svg-icons'
import { usePathname } from 'next/navigation';

import logo from '../public/logo.png'

function Header() {
    const router = usePathname()
  return (
      <div>
          <div className='flex justify-around items-center mt-4'>
              <ul className='font-semibold flex gap-[45px]'>
                  
              <Link href="/">
                    <li className="relative">
                    Breakfast <span className='Headeractive'></span>
                    </li>
                </Link>
                <Link href="/lunch">
                    <li className="relative">
                    Lunch
                    </li>
                </Link>
                <Link href="/Dinner">
                    <li className="relative">
                    Dinner
                    </li>
                </Link>

                {/* <Link href="/">
                    <li className="relative">
                    Breakfast <span className={router.pathname === '/' ? 'Headeractive' : null}></span>
                    </li>
                </Link>
                <Link href="/lunch">
                    <li className="relative">
                    Lunch <span className={router.pathname === '/lunch' ? 'Headeractive' : null}></span>
                    </li>
                </Link>
                <Link href="/Dinner">
                    <li className="relative">
                    Dinner <span className={router.pathname === '/Dinner' ? 'Headeractive' : null}></span>
                    </li>
                </Link> */}
                
            </ul>
            <div className='relative'>
                  <FontAwesomeIcon icon={faBagShopping} className='text-[20px]' />
                  <FontAwesomeIcon icon={faCircle} className='absolute text-[10px] brand-red left-2'/>
            </div>
            <div>
                <Image src={logo} width={80}/>
            </div>
            <ul className='font-semibold flex gap-[45px]'>
                <li>Offers</li>
                <li>Menu</li>
              </ul>
              <div className='flex items-center gap-4'>
                  <Link href={'/SignIn'} className='font-semibold'>Sign In</Link>
                  <Link href={'/SignUp'} className='bg-brandRed text-white px-[10px] py-[5px] rounded-[8px] hover:drop-shadow-btnShadow transition duration-200 ease-in-out'>Sign Up</Link>
              </div>
          </div>
          
      </div>
  )
}

export default Header