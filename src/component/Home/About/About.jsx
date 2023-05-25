import myPic from '../../../assets/My Pic 2.jpg'

import { BiRightArrowAlt } from 'react-icons/bi';
const About = () => {
    return (
        <div className="text-white bg-[#2C2C6C]">
            <div className="md:flex justify-between items-center py-[50px] md:pt-[190px] md:pb-[100px] px-[4%] md:px-[10%]">
                <div data-aos="zoom-in" data-aos-duration="2000" className="md:w-[60%]">
                    <div className='md:ps-[50px]'>
                        <div className='flex items-center mb-5'>
                            <h1 className='text-[30px] font-semibold'>My About</h1>
                            <BiRightArrowAlt className='text-[30px] ml-5'></BiRightArrowAlt>
                        </div>
                        <p className='text-[#d9d9d9cc] leading-7'>My name is 🥰🥰... Md. Morsalin Islam ...🥰🥰 My house is in Nilphamari Sadar. I am student of Computer Technology in Dinajpur Polytechnic Institute 2018-19 session. My childhood dream is to become a Software Engineer. I will do the coding. Coding is my wish Coding is my dream. I spend most of my time coding. And I try to learn something new every day by searching Google in my spare time.</p>
                        <button className='text-black font-semibold bg-[#409EFF] hover:bg-[#2C2C6C] hover:border hover:text-white hover:border-[#409EFF] px-5 py-[10px] rounded-lg mt-10'>Read More</button>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="2000" className="md:w-[40%] mt-[100px] md:mt-0">
                    <div className='w-full h-full flex justify-center items-center'>
                        <img className='w md:w-[400px] rounded-lg' src={myPic} alt="My Pic" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;