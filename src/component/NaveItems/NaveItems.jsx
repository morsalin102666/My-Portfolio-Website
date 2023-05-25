import { Link } from 'react-router-dom';
import logo from '../../assets/My Logho .png'
const NaveItems = () => {
    return (
        <div className='hidden md:block'>
            <div className="flex justify-center mt-[40px]">
                <div>
                    <img className='w-[200px] h-[140px]' src={logo} alt="sete logho" />
                    <div className='text-center mt-[60px]'>
                        <Link className='text-[#d9d9d9cc] font-medium block mb-[40px] hover:text-blue-300 hover:underline'>HOME</Link>
                        <Link className='text-[#d9d9d9cc] font-medium block mb-[40px] hover:text-blue-300 hover:underline'>ABOUT</Link>
                        <Link className='text-[#d9d9d9cc] font-medium block mb-[40px] hover:text-blue-300 hover:underline'>EXPERIENCE</Link>
                        <Link className='text-[#d9d9d9cc] font-medium block mb-[40px] hover:text-blue-300 hover:underline'>PROJECTS</Link>
                        <Link className='text-[#d9d9d9cc] font-medium block mb-[40px] hover:text-blue-300 hover:underline'>CONTACT</Link>
                    </div>
                    <div className='text-center mt-[300px]'>
                        <p className='text-blue-400'>Designe & Development</p>
                        <div className='flex justify-center'>
                            <hr className='w-[30%] my-1' />
                        </div>
                        <p className='text-[#d9d9d9cc] font-medium'>Md Morsalin Islam</p>
                        <p className='text-[#d9d9d9cc] font-medium'>__ © 2023 __</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NaveItems;