import myPic from '../../../assets/My Pic 2.jpg'

import { BiRightArrowAlt } from 'react-icons/bi';
const About = () => {
    return (
        <div className="text-white bg-[#2C2C6C]">
            <div className="md:flex justify-between items-center py-[50px] md:py-[190px] px-[4%] md:px-[10%]">
                <div data-aos="zoom-in" data-aos-duration="2000" className="md:w-[60%]">
                    <div className='md:ps-[50px]'>
                        <div className='flex items-center mb-5'>
                            <h1 className='text-[30px] font-semibold'>My About</h1>
                            <BiRightArrowAlt className='text-[30px] ml-5'></BiRightArrowAlt>
                        </div>
                        <p className='text-[#d9d9d9cc] leading-7'>My name is Haniful Islam (Modhupurno)❤ . I am from Dinajpur, Bangladesh. Currently I study at Dinajpur Poltechnic Institute, Diploma in Computer Technology.Since my childhood, I love art and design. I always try to design stuff with my unique point of veiw. I also love to create things that can be usefull to other. I started coding since I was in high school. Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it realy interesting and I enjoyed the process a lot</p>
                        <button className='btn btn-outline btn-secondary rounded-md mt-10'>Read More</button>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="2000" className="md:w-[40%] mt-[100px] md:mt-0">
                    <div className='w-full h-full flex justify-center items-center hover:ease-in duration-300'>
                        <img className='w-[400px] rounded-lg' src={myPic} alt="My Pic" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;