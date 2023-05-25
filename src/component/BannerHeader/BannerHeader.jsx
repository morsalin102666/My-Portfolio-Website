export const BannerHeader = () => {
    return (
        <div>
            <div className="flex justify-between items-center px-[10%] w-[100%] h-[60px] bg-[#151C48]">
                <p className="text-[20px] text-[#409EFF] font-serif font-semibold"> <i><span className="text-[45px] font-thin">M</span>y Portfolio</i></p>
                <button className="font-semibold bg-[#409EFF] hover:bg-[#2C2C6C] hover:border hover:text-white hover:border-[#409EFF] px-4 py-[10px] rounded-lg ">Vew Resume</button>
            </div>
            <hr className="border border-white" />
        </div>
    )
}
