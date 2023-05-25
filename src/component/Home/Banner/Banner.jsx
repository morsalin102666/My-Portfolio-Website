import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import myPic from '../../../assets/My Pic.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div id='banner' className=" bg-[#2C2C6C]">
            <div className="flex justify-center">
                <div className='mt-[120px] md:mt-[130px]'>
                    <div className='text-center text-[]'>
                        <h1 className='text-[27px] md:text-[50px] text-[white] font-semibold font-serif'><TypeAnimation
                            sequence={[
                                // Same String at the start will only be typed once, initially
                                'Accalamualikum',
                                2000,
                                'Subhan-Allah',
                                2000,
                                'Allhamdulillah',
                                2000,
                                'La-ilaha illa-Allha',
                                2000,
                                'Allahu Akbar',
                                2000,
                                'Muhammad (s)',
                                2000,
                            ]}
                            speed={50}
                            // style={{ fontSize: '3em' }}
                            repeat={Infinity}
                        /></h1>
                        <h2 data-aos="fade-right"
                            data-aos-duration="2000" className='text-[15] md:text-[20px] mt-4 font-serif text-white'>Hi..! Im</h2>
                        <h3 data-aos="fade-left"
                            data-aos-duration="2000" className='text-[25px] md:text-[35px] text-white font-serif'>Md Morsalin Islam</h3>
                        <p data-aos="fade-up"
                            data-aos-duration="2000" className='text-[13px] md:text-[20px] mt-4 text-white font-serif'>~~~ Frontend Web Developer || React Js || JavaScript ~~~</p>
                    </div>
                    <div className='flex justify-center mt-8 md:mt-0 md:hidden'>
                        <Link to={'https://www.facebook.com/md.morsalin.islam.102666'}>
                        <BsFacebook data-aos="fade-right"
                            data-aos-duration="2000" className='text-[25px] mr-[20px] md:mr-[40px] hover:text-blue-400 text-[rgb(198,215,236)]'></BsFacebook>
                        </Link>
                        {/* <Link to={}> */}
                        <BsInstagram data-aos="fade-up"
                            data-aos-duration="2000" className='text-[25px] mr-[20px] md:mr-[40px] hover:text-blue-400 text-[rgb(198,215,236)]'></BsInstagram>
                        {/* </Link> */}
                        <Link to={'https://twitter.com/morsalinislamm3'}>

                        <BsTwitter data-aos="fade-down"
                            data-aos-duration="2000" className='text-[25px] mr-[20px] md:mr-[40px] hover:text-blue-400 text-[rgb(198,215,236)]'></BsTwitter>
                        </Link>
                        <Link to={'https://www.linkedin.com/feed/'}>
                        <FiLinkedin data-aos="fade-up"
                            data-aos-duration="2000" className='text-[25px] mr-[20px] md:mr-[40px] hover:text-blue-400 text-[rgb(198,215,236)]'></FiLinkedin>
                        </Link>
                        <Link to={'https://github.com/morsalin102666'}>
                        <BsGithub data-aos="fade-left"
                            data-aos-duration="2000" className='text-[25px] mr-[20px] md:mr-[40px] hover:text-blue-400 text-[rgb(198,215,236)]'></BsGithub>
                        </Link>
                    </div>
                    <div className='flex justify-center my-[50px]'>
                        <img data-aos="zoom-in" data-aos-duration="2000" className='rounded-full w-[300px] h-[300px]' src={myPic} alt="My Pic" />
                    </div>
                    <div className='flex justify-center'>
                        <a href='#contact'>
                            <button className="font-semibold bg-[#409EFF] hover:bg-[#2C2C6C] hover:border hover:text-white hover:border-[#409EFF] px-5 py-[10px] rounded-lg">Contact Me</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;