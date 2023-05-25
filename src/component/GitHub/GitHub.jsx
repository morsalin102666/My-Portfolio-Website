import git from '../../assets/Github.png'
const GitHub = () => {
    return (
        <div className="px-[4%] md:px-[10%] bg-[#2C2C6C]">
            <h1 data-aos="zoom-in"
                data-aos-duration="2000" className='text-[30px] mb-[70px] md:mb-[80px] md:text-[50px] text-white font-semibold text-center'>Project</h1>
            <div className='flex justify-center'>
                <img data-aos="zoom-in"
                data-aos-duration="2000" src={git} alt="GitHub" />
            </div>
        </div>
    );
};

export default GitHub;