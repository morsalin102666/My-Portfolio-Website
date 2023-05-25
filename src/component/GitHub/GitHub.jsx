import git from '../../assets/Github.png'
const GitHub = () => {
    return (
        <div className="px-[4%] md:px-[6%] lg:px-[10%] bg-[#2C2C6C]">
            <h1 className='text-[30px] mb-[70px] md:mb-[80px] md:text-[50px] text-white font-semibold text-center'>Git Commit</h1>
            <div className='flex justify-center'>
                <img src={git} alt="GitHub" />
            </div>
        </div>
    );
};

export default GitHub;