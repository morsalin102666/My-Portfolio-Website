import logo from '../../assets/My Logho .png'
const NaveItems = () => {
    return (
        <div className='hidden md:block'>
            <div className="flex justify-center mt-[40px]">
                <div>
                    <a href="#banner">
                        <img className='w-[200px] h-[140px]' src={logo} alt="sete logho" />
                    </a>
                    <div className='text-center mt-[60px]'>
                        <a href='#banner' className='text-[#d9d9d9cc] scroll-smooth font-medium block mb-[40px] hover:text-blue-300 hover:underline'>HOME</a>
                        <a href='#about' className='text-[#d9d9d9cc] font-medium block mb-[40px] hover:text-blue-300 hover:underline'>ABOUT</a>
                        <a href='#experience' className='text-[#d9d9d9cc] font-medium block mb-[40px] hover:text-blue-300 hover:underline'>EXPERIENCE</a>
                        <a href='#projects' className='text-[#d9d9d9cc] font-medium block mb-[40px] hover:text-blue-300 hover:underline'>PROJECTS</a>
                        <a href='#contact' className='text-[#d9d9d9cc] font-medium block mb-[40px] hover:text-blue-300 hover:underline'>CONTACT</a>
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