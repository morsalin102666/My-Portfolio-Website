import { Link } from "react-router-dom";
import { MdKeyboardArrowUp } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='h-[70px] md:h-[100px] bg-[#2C2C6C] border-t md:px-[5%]'>
            <div className="flex justify-center md:justify-between items-center mt-6">
                <h1 className="text-[#409EFF] hover:underline hidden md:block">MR@102666</h1>
                <p className="text-[#d9d9d9cc] ">© copy right</p>
                <Link className="text-white rounded-md bg-[#409EFF] py-3">
                    <MdKeyboardArrowUp className="text-[35px] hidden md:block"></MdKeyboardArrowUp>
                </Link>
            </div>
        </div>
    );
};

export default Footer;