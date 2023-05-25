import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='py-[50px] md:py-10 px-[4%] md:px-[10%] bg-[#2C2C6C] md:mb-0'>
            <h1 data-aos="zoom-in"
                data-aos-duration="2000" className='text-[30px] mb-[70px] md:mb-[50px] md:text-[50px] text-white font-semibold text-center md:pt-[150px]'>Contact Us</h1>
            <div className="md:flex justify-between">
                <div className="w-full md:w-[48%] text-white">
                    <h1 data-aos="fade-left"
                        data-aos-duration="2000" className='text-[25px] text-[#d9d9d9cc] mb-5'>Contact</h1>
                    <div >
                        <div data-aos="zoom-in"
                                data-aos-duration="2000" className='mb-5 md:mb-9 border border-[#409EFF] rounded-lg'>
                            <div className='flex items-center bg-[#151C48] hover:bg-[#2C2C6C] px-2 md:px-4 py-3 md:py-5 rounded-lg'>
                                <FaWhatsapp className='text-[18px] md:text-[20px] text-[#409EFF]'></FaWhatsapp>
                                <h className="px-4 text-[12px] md:text-[16px]">WhatsApp</h>
                                <p className=' text-[12px] md:text-[16px]'>+8801750620228</p>
                                <Link className='hover:underline ml-5 text-[#409EFF] text-[12px] md:text-[16px]'>send a message</Link>
                            </div>
                        </div>
                        <div data-aos="zoom-in"
                                data-aos-duration="2000" className='mb-5 md:mb-9 border border-[#409EFF] rounded-lg'>
                            <div className='flex items-center bg-[#151C48] hover:bg-[#2C2C6C] px-2 md:px-4 py-3 md:py-5 rounded-lg'>
                                <MdOutlineEmail className='text-[18px] md:text-[20px] text-[#409EFF]'></MdOutlineEmail>
                                <h className="px-4 text-[12px] md:text-[16px]">Email</h>
                                <p className=' text-[12px] md:text-[16px]'>morsalin102666@gmail.com</p>
                                <Link className='hover:underline ml-5 text-[#409EFF] text-[12px] md:text-[16px]'>send a message</Link>
                            </div>
                        </div>
                        <div data-aos="zoom-in"
                                data-aos-duration="2000" className='mb-5 md:mb-9 border border-[#409EFF] rounded-lg'>
                            <div className='flex items-center bg-[#151C48] hover:bg-[#2C2C6C] px-2 md:px-4 py-3 md:py-5 rounded-lg'>
                                <RiMessengerLine className='text-[18px] md:text-[20px] text-[#409EFF]'></RiMessengerLine>
                                <h className="px-4 text-[12px] md:text-[16px]">Messenger</h>
                                <p className=' text-[12px] md:text-[16px]'>Meta / Facebook</p>
                                <Link className='hover:underline ml-5 text-[#409EFF] text-[12px] md:text-[16px]'>send a message</Link>
                            </div>
                        </div>
                        <div data-aos="zoom-in"
                            data-aos-duration="2000" className='md:flex items-center mb-12 md:mb-0 bg-[#151C48] hover:bg-[#2C2C6C] px-2 md:px-4 py-5 md:py-7 md:mt-[60px] border border-[#409EFF] rounded-lg'>
                            <div className='flex mb-3 md:mb-0 md:justify-between items-center'>
                                <CiLocationOn className='text-[18px] md:text-[20px] text-[#409EFF]'></CiLocationOn>
                                <h className='ml-6'>Address</h>
                            </div>
                            <div className='ml-6 py-3 md:py-0'>
                                <p className='underline text-[#409EFF] md:mb-2'>Current Location :</p>
                                <p className='ml-5'>Kalshi, Mirpur 11, Dhaka</p>
                            </div>
                            <div className='ml-6'>
                                <p className='underline text-[#409EFF] md:mb-2'>Permanent Location :</p>
                                <p className='ml-5'>Kukhapara, Dhonipara, Nilphamari Sadar</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[50%]">
                    <h1 data-aos="fade-left"
                        data-aos-duration="2000" className='text-[25px] text-[#d9d9d9cc] mb-5'>Message</h1>
                    <form>
                        <div className="md:grid md:grid-cols-2 md:gap-4">
                            <input data-aos="zoom-in"
                                data-aos-duration="2000" className="w-full text-white bg-[#2C2C6C] border rounded-lg mb-6 px-4 py-4 border-[#409EFF] outline-none" type="text" name="name" placeholder="Name" />
                            <input data-aos="zoom-in"
                                data-aos-duration="2000" className="w-full text-white bg-[#2C2C6C] border rounded-lg mb-6 px-4 py-4 border-[#409EFF] outline-none" type="number" name="number" placeholder="Phone Number" />
                        </div>
                        <div>
                            <input data-aos="zoom-in"
                                data-aos-duration="2000" className="w-full text-white bg-[#2C2C6C] border rounded-lg mb-6 px-4 py-4 border-[#409EFF] outline-none" type="email" name="email" placeholder="Email" />
                        </div>
                        <div>
                            <textarea data-aos="zoom-in"
                                data-aos-duration="2000" name="message" className="w-full text-white h-[200px] bg-[#2C2C6C] border rounded-lg mb-6 px-4 py-4 border-[#409EFF] outline-none" placeholder="Enter you message . . . ."></textarea>
                        </div>
                        <button className="text black bg-[#409EFF] px-4 py-[10px] rounded-lg" >Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;