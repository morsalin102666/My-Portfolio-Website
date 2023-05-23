import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
const SocalMidea = () => {
    return (
        <div className="flex justify-center">
            <div className='mt-[450px]'>
                {/* <Link to={}> */}
                    <BsFacebook data-aos="fade-down"
                        data-aos-duration="3000" className='text-[25px] mb-[40px] hover:text-blue-400 text-[rgb(198,215,236)]'></BsFacebook>
                {/* </Link> */}
                {/* <Link to={}> */}
                    <BsInstagram data-aos="fade-right"
                        data-aos-duration="3000" className='text-[25px] mb-[40px] hover:text-blue-400 text-[rgb(198,215,236)]'></BsInstagram>
                {/* </Link> */}
                {/* <Link to={}> */}

                    <BsTwitter data-aos="fade-left"
                        data-aos-duration="3000" className='text-[25px] mb-[40px] hover:text-blue-400 text-[rgb(198,215,236)]'></BsTwitter>
                {/* </Link> */}
                {/* <Link to={}> */}
                    <FiLinkedin data-aos="fade-up"
                        data-aos-duration="3000" className='text-[25px] mb-[40px] hover:text-blue-400 text-[rgb(198,215,236)]'></FiLinkedin>
                {/* </Link> */}
                {/* <Link to={}> */}
                    <BsGithub data-aos="fade-right"
                        data-aos-duration="3000" className='text-[25px] mb-[40px] hover:text-blue-400 text-[rgb(198,215,236)]'></BsGithub>
                {/* </Link> */}
                <div data-aos="fade-up"
                    data-aos-duration="3000" className='w-[3px] ml-[11px] mt-[70px] h-[100px] mb-[10px] bg-[rgb(198,215,236)]'></div>
            </div>
        </div>
    );
};

export default SocalMidea;