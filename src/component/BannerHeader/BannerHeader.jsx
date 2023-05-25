import { useState } from "react"
import { HiMenuAlt1 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { Link } from "react-router-dom";

import logo from '../../assets/My Logho .png'

export const BannerHeader = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div>
                <div className="flex justify-between items-center px-[4%] md:px-[10%] w-[100%] h-[60px] bg-[#151C48]">
                    <div onClick={() => setOpen(!open)} className="block md:hidden">
                        {
                            open === true ? <span className="text-white"><CgClose className="text-[30px]"></CgClose></span> : <span className="text-white"><HiMenuAlt1 className="text-[30px]"></HiMenuAlt1></span>
                        }
                    </div>
                    <p className="text-[20px] hidden md:block text-[#409EFF] font-serif font-semibold"> <i><span className="text-[30px] md:text-[45px] font-thin">M</span>y Portfolio</i></p>
                    <button className="font-semibold bg-[#409EFF] hover:bg-[#2C2C6C] hover:border hover:text-white hover:border-[#409EFF] px-4 py-[10px] rounded-lg ">Vew Resume</button>
                </div>
                <hr className="border border-white" />
            </div>
            <div className={`block md:hidden  border rounded-md border-[#409EFF] ${open ? "mt-600px duration-1000" : "mt-[-600px] duration-1000"}`}>
                <div className="bg-[#151C48]">
                    <div className="flex justify-center">
                        <img className='w-[150px] h-[100px]' src={logo} alt="sete logho" />
                    </div>
                    <div className='text-center'>
                        <Link className='text-[#d9d9d9cc] font-medium block mb-[20px] hover:text-blue-300 hover:underline'>HOME</Link>
                        <Link className='text-[#d9d9d9cc] font-medium block mb-[20px] hover:text-blue-300 hover:underline'>ABOUT</Link>
                        <Link className='text-[#d9d9d9cc] font-medium block mb-[20px] hover:text-blue-300 hover:underline'>EXPERIENCE</Link>
                        <Link className='text-[#d9d9d9cc] font-medium block mb-[20px] hover:text-blue-300 hover:underline'>PROJECTS</Link>
                        <Link className='text-[#d9d9d9cc] font-medium block mb-[20px] hover:text-blue-300 hover:underline'>CONTACT</Link>
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
