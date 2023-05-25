import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
const SocalMidea = () => {
    return (
        <div className="flex justify-center">
            <div className='mt-[450px]'>
                {/* <Link to={}> */}
                    <BsFacebook className='text-[25px] mb-[40px] hover:text-blue-400 text-[rgb(198,215,236)]'></BsFacebook>
                {/* </Link> */}
                {/* <Link to={}> */}
                    <BsInstagram className='text-[25px] mb-[40px] hover:text-blue-400 text-[rgb(198,215,236)]'></BsInstagram>
                {/* </Link> */}
                {/* <Link to={}> */}

                    <BsTwitter className='text-[25px] mb-[40px] hover:text-blue-400 text-[rgb(198,215,236)]'></BsTwitter>
                {/* </Link> */}
                {/* <Link to={}> */}
                    <FiLinkedin className='text-[25px] mb-[40px] hover:text-blue-400 text-[rgb(198,215,236)]'></FiLinkedin>
                {/* </Link> */}
                {/* <Link to={}> */}
                    <BsGithub className='text-[25px] mb-[40px] hover:text-blue-400 text-[rgb(198,215,236)]'></BsGithub>
                {/* </Link> */}
                <div className='w-[3px] ml-[11px] mt-[70px] h-[100px] mb-[10px] bg-[rgb(198,215,236)]'></div>
            </div>
        </div>
    );
};

export default SocalMidea;