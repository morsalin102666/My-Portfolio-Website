import { useState } from "react"
import { HiMenuAlt1 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

import logo from '../../assets/My Logho .png'

export const BannerHeader = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div>
                <div className="flex justify-between items-center px-[4%] md:px-[6%] lg:px-[10%] w-[100%] h-[60px] bg-[#151C48]">
                    <div onClick={() => setOpen(!open)} className="block md:hidden">
                        {
                            open === true ? <span className="text-white"><CgClose className="text-[30px]"></CgClose></span> : <span className="text-white"><HiMenuAlt1 className="text-[30px]"></HiMenuAlt1></span>
                        }
                    </div>
                    <a href="#banner" className="text-[20px] hidden md:block text-[#409EFF] font-serif font-semibold"> <i><span className="text-[30px] md:text-[45px] font-thin">M</span>y Portfolio</i></a>
                    <button className="font-semibold bg-[#409EFF] hover:bg-[#2C2C6C] hover:border hover:text-white hover:border-[#409EFF] px-4 py-[10px] rounded-lg ">Vew Resume</button>
                </div>
                <hr className="border border-white" />
            </div>
            <div className={`block md:hidden  border rounded-md border-[#409EFF] ${open ? "mt-600px duration-1000" : "mt-[-600px] duration-1000"}`}>
                <div className="bg-[#151C48]">
                    <div className="flex justify-center">
                        <a href="#banner">
                            <img className='w-[150px] h-[100px]' src={logo} alt="sete logho" />
                        </a>
                    </div>
                    <div className='text-center'>
                        <a href='#banner' className='text-[#d9d9d9cc] font-medium block mb-[20px] hover:text-blue-300 hover:underline'>HOME</a>
                        <a href='#about' className='text-[#d9d9d9cc] font-medium block mb-[20px] hover:text-blue-300 hover:underline'>ABOUT</a>
                        <a href='#experience' className='text-[#d9d9d9cc] font-medium block mb-[20px] hover:text-blue-300 hover:underline'>EXPERIENCE</a>
                        <a href='#projects' className='text-[#d9d9d9cc] font-medium block mb-[20px] hover:text-blue-300 hover:underline'>PROJECTS</a>
                        <a href='#contact' className='text-[#d9d9d9cc] font-medium block mb-[20px] hover:text-blue-300 hover:underline'>CONTACT</a>
                    </div>
                    <div className='text-center mt-[50px] pb-5 px-3'>
                        <p className='text-blue-400'>Designe & Development</p>
                        <div className='flex justify-center'>
                            <hr className='w-[50%] my-1' />
                        </div>
                        <p className='text-[#d9d9d9cc] font-medium'>Md Morsalin Islam</p>
                        <p className='text-[#d9d9d9cc] font-medium'>__ © 2023 __</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
