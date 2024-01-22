"use client";
import {motion} from 'framer-motion';
import { navbarVariants } from '@/shared/utils/motion';

const Navbar = () => {
  const appName=process.env.NEXT_PUBLIC_APP_NAME
  return (
    <motion.nav 
    variants={navbarVariants}
    initial="hidden"
    whileInView="show"
    className="relative padX py-8"
    >
      <div className='navBackground absolute inset-0 w-1/2 mx-auto'></div>
      <div className='innerWidth flex justify-between items-center gap-8 mx-auto text-white'>
        <div className='z-[20] cursor-pointer w-8 h-8'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </div>

        <div className='z-[20] text-[24px] text-white font-extrabold'>{appName?.toUpperCase()}</div>
        <div className='z-[20] cursor-pointer w-6 h-6'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar