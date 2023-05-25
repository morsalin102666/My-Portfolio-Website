import html from '../../assets/html.png'
import css from '../../assets/css.png'
import boostrap from '../../assets/bootstrap.png'
import tailwind from '../../assets/tailwind.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/ract.png'
// import express from '../../assets/express.png'
import firebase from '../../assets/firebase.png'
import mongodb from '../../assets/mongodb.png'
import { MdOutlineCastForEducation } from 'react-icons/md';
import { AiOutlineProject } from 'react-icons/ai';
import { IoCodeWorkingSharp } from 'react-icons/io5';

const Exprience = () => {
    return (
        <div className='py-[50px] md:py-0 px-[4%] md:px-[10%] bg-[#2C2C6C] md:mb-0'>
            <h1 data-aos="zoom-in"
                data-aos-duration="2000" className='text-[30px] mb-[70px] md:mb-[50px] md:text-[50px] text-white font-semibold text-center md:pt-[150px]'>Experience</h1>
            <div className="md:flex justify-between items-center">
                <div className="w-full md:w-[22%] md:mr-[4%]">
                    <h1 className='text-[25px] text-[#d9d9d9cc] mb-5'>Work</h1>
                    <div className=" md:grid md:grid-cols-1 gap-4">
                        <div data-aos="fade-right"
                            data-aos-duration="2000" className='flex mb-[15px] md:mb-0 justify-center rounded-xl border-x border-x-[#ee43d1] hover:border-x-[#151C48] border-b-4 hover:bg-[#2C2C6C] border-b-[#ee43d1]  hover:border-b-[#151C48] items-center bg-[#151C48]'>
                            <div className='py-9 text-center'>
                                <div className='flex justify-center mb-2'>
                                    <MdOutlineCastForEducation className='text-[25px] text-white'></MdOutlineCastForEducation>
                                </div>
                                <p className='text-[#d9d9d9cc] mb-2 text-[20px]'>Experience</p>
                                <span className='text-[#d9d9d9cc] text-[14px]'>1+ Years Working</span>
                            </div>
                        </div>
                        <div data-aos="zoom-in"
                            data-aos-duration="2000" className='flex mb-[15px] md:mb-0 justify-center rounded-xl border-x border-x-[#ee43d1] hover:border-x-[#151C48] border-b-4 hover:bg-[#2C2C6C] border-b-[#ee43d1]  hover:border-b-[#151C48] items-center bg-[#151C48]'>
                            <div className='py-9 text-center'>
                                <div className='flex justify-center mb-2'>
                                    <AiOutlineProject className='text-[25px] text-white'></AiOutlineProject>
                                </div>
                                <p className='text-[#d9d9d9cc] mb-2 text-[20px]'>Working Place</p>
                                <span className='text-[#d9d9d9cc] text-[14px]'>P-Hero</span>
                            </div>
                        </div>
                        <div data-aos="fade-left"
                            data-aos-duration="2000" className='flex mb-[15px] md:mb-0 justify-center rounded-xl border-x border-x-[#ee43d1] hover:border-x-[#151C48] border-b-4 hover:bg-[#2C2C6C] border-b-[#ee43d1]  hover:border-b-[#151C48] items-center bg-[#151C48]'>
                            <div className='py-9 text-center'>
                                <div className='flex justify-center mb-2'>
                                    <IoCodeWorkingSharp className='text-[25px] text-white'></IoCodeWorkingSharp>
                                </div>
                                <p className='text-[#d9d9d9cc] mb-2 text-[20px]'>Projects</p>
                                <span className='text-[#d9d9d9cc] text-[14px]'>45+ Project Copmlete</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[70%] mt-[150px] md:mt-0">
                    <h1 data-aos="fade-down"
                        data-aos-duration="2000" className='text-[25px] text-[#d9d9d9cc] mb-5'>Exprience</h1>
                    <div className=" md:grid md:grid-cols-3 gap-4">
                        <div data-aos="fade-down"
                            data-aos-duration="2000" className='flex mb-[15px] md:mb-0 justify-center rounded-xl border-x border-[#E44D26] border-b-4 hover:bg-[#2C2C6C] border-b-[#E44D26] items-center bg-[#151C48]'>
                            <img className='w-[100px] py-[35px] ' src={html} alt="html" />
                        </div>
                        <div data-aos="fade-down"
                            data-aos-duration="2000" className='flex mb-[15px] md:mb-0 justify-center rounded-xl border-x border-[#2062AF] border-b-4 hover:bg-[#2C2C6C] border-b-[#2062AF] items-center bg-[#151C48]'>
                            <img className='w-[100px] py-[35px] ' src={css} alt="css" />
                        </div>
                        <div data-aos="fade-down"
                            data-aos-duration="2000" className='flex mb-[15px] md:mb-0 justify-center rounded-xl border-x border-[#880AFB] border-b-4 hover:bg-[#2C2C6C] border-b-[#880AFB] items-center bg-[#151C48]'>
                            <img className='w-[100px] py-[35px] ' src={boostrap} alt="boostrap" />
                        </div>
                        <div data-aos="zoom-in"
                            data-aos-duration="2000" className='flex mb-[15px] md:mb-0 justify-center rounded-xl border-x border-[#01B7D6] border-b-4 hover:bg-[#2C2C6C] border-b-[#01B7D6] items-center bg-[#151C48]'>
                            <img className='w-[100px] py-[35px] ' src={tailwind} alt="tailwind" />
                        </div>
                        <div data-aos="zoom-in"
                            data-aos-duration="2000" className='flex mb-[15px] md:mb-0 justify-center rounded-xl border-x border-[#FFF13D] border-b-4 hover:bg-[#2C2C6C] border-b-[#FFF13D] items-center bg-[#151C48]'>
                            <img className='w-[100px] py-[35px] ' src={javascript} alt="javascript" />
                        </div>
                        <div data-aos="zoom-in"
                            data-aos-duration="2000" className='flex mb-[15px] md:mb-0 justify-center rounded-xl border-x border-[#61DBFB] border-b-4 hover:bg-[#2C2C6C] border-b-[#61DBFB] items-center bg-[#151C48]'>
                            <img className='w-[100px] py-[35px] ' src={react} alt="react" />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="2000" className='flex mb-[15px] md:mb-0 justify-center rounded-xl border-x border-[#F57F17] border-b-4 hover:bg-[#2C2C6C]  border-b-[#F57F17] items-center bg-[#151C48]'>
                            <img className='w-[100px] py-[35px] ' src={firebase} alt="firebase" />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="2000" className='flex mb-[15px] md:mb-0 justify-center rounded-xl border-x border-[#d9d9d9cc] border-b-4 hover:bg-[#2C2C6C] border-b-[#d9d9d9cc] items-center bg-[#151C48]'>
                            {/* <img className='w-[100px] py-[35px] text-white ' src={express} alt="express" /> */}
                            <p className='text-white text-[35px] py-16 md:py-0'>Express</p>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="3000" className='flex mb-[15px] md:mb-0 justify-center rounded-xl border-x border-[#499D4A] border-b-4 hover:bg-[#2C2C6C] border-b-[#499D4A] items-center bg-[#151C48]'>
                            <img className='w-[100px] py-[35px] ' src={mongodb} alt="mongodb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exprience;