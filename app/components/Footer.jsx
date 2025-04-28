import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkmode, setIsDarkmode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkmode? assets.logo_dark : assets.logo} alt='logo' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkmode? assets.mail_icon_dark : assets.mail_icon} alt='mail_icon' className='w-6' />
            ashilpatel.work@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between mt-12 border-t border-gray-400 mx-[10%] py-6'>
        <p>@ 2025 Ashil Patel. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a href="https://github.com/ashil31"><Image src={assets.github_icon} alt='github' className='w-10'/></a></li>
            <li><a href="https://www.linkedin.com/in/ashil-patel-6aa4931aa/"><Image src={assets.linkdin_icon} alt='linkdin' className='w-10'/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
