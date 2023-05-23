export const BannerHeader = () => {
    return (
        <div>
            <div className="flex justify-between items-center px-[10%] w-[100%] h-[60px] bg-[#151C48]">
                <p data-aos="zoom-in" data-aos-duration="2000" className="text-[20px] text-secondary font-serif font-semibold"> <i><span className="text-[45px] font-thin">M</span>y Portfolio</i></p>
                <button data-aos="zoom-in" data-aos-duration="2000" className="btn btn-outline btn-secondary rounded-md ">Vew Resume</button>
            </div>
            <hr className="border border-white" />
        </div>
    )
}
