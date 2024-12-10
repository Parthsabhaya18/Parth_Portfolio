import React from 'react'

export default function Footer() {
  return (
    <div className='bg-white mt-12 flex flex-col items-center'>
        <div className='container flex flex-col md:flex-row justify-between px-5'>
            <div className='mb-8 md:mb-0 ml-5 md:w-1/3 mr-5 text-center md:text-start'>
                <h2 className='text-3xl mb-4 font-semibold text-yellow-500'>Parth Sabhaya</h2>
                <p className='mt-1 text-gray-500 md:pr-5'>  Whether you're a web developer in need of support or an early-stage company looking to level up your development, I'd love to talk about your project. If you want to develop your website. 💜</p>
            </div>
            <div className='flex justify-evenly md:w-3/4'>
                <div className='space-y-3'>
                    <h3 className='font-medium text-gray-700'>EXPLORE</h3>
                    <ul className='text-gray-500 space-y-2'>
                        <li><a className=' hover:text-blue-600 hover:font-[500] hover:border-b-[1.5px] border-gray-400' href="https://github.com/Parthsabhaya18" href="#">Support</a></li>
                        <li><a className=' hover:text-blue-600 hover:font-[500] hover:border-b-[1.5px] border-gray-400' href="https://github.com/Parthsabhaya18" href="#about">About Us</a></li>
                        <li><a className=' hover:text-blue-600 hover:font-[500] hover:border-b-[1.5px] border-gray-400' href="https://github.com/Parthsabhaya18" href="#Hero">Blog</a></li>
                    </ul>
                </div>
                <div className='space-y-3'>
                <h3 className='font-medium text-gray-700'>LEGAL</h3>
                    <ul className='text-gray-500 space-y-2'>
                        <li><a className=' hover:text-blue-600 hover:font-[500] hover:border-b-[1.5px] border-gray-400' href="https://github.com/Parthsabhaya18" href="#">Terms of Use</a></li>
                        <li><a className=' hover:text-blue-600 hover:font-[500] hover:border-b-[1.5px] border-gray-400' href="https://github.com/Parthsabhaya18" href="#">Private Policy</a></li>
                    </ul>
                </div>
                <div className='space-y-3'>
                <h3 className='font-medium text-gray-700'>SOCIAL</h3>
                    <ul className='text-gray-500 space-y-2 '>
                        <li ><a className=' hover:text-blue-600 hover:font-[500] hover:border-b-[1.5px] border-gray-400' href="https://github.com/Parthsabhaya18">GitHub</a></li>
                        <li ><a className=' hover:text-blue-600 hover:font-[500] hover:border-b-[1.5px] border-gray-400' href="https://www.linkedin.com/in/parth-sabhaya-a37836223/">Linkdin</a></li>
                        <li ><a className=' hover:text-blue-600 hover:font-[500] hover:border-b-[1.5px] border-gray-400'  href="https://www.instagram.com/the_parthsabhaya/">Instagram</a></li>
                    </ul>
                </div>

            </div>

        </div>
        <div className='mt-8 bg-yellow-500 h-2 w-full'></div>
    </div>
  )
}
