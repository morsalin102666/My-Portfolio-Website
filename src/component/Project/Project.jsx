import { Link } from 'react-router-dom';
import project1 from '../../assets/project/chamera shop.png'
import project2 from '../../assets/project/chef exprience.png'
import project3 from '../../assets/project/dream jobs.png'
import project4 from '../../assets/project/knowledge.png'
import project5 from '../../assets/project/looplab.png'
import project6 from '../../assets/project/mizuxe.png'
const Project = () => {
    return (
        <div className="px-[4%] md:px-[10%] md:py-[200px] bg-[#2C2C6C]">
            <h1 data-aos="zoom-in"
                data-aos-duration="2000" className='text-[30px] mb-[70px] md:mb-[50px] md:text-[50px] text-white font-semibold text-center'>Project</h1>
            <h1 className='text-[25px] text-[#d9d9d9cc] mb-5'>Recent Work</h1>
            <div className="md:grid md:grid-cols-3 gap-5">

                <div data-aos="zoom-in"
                    data-aos-duration="2000" className="bg-[#151C48] hover:bg-[#2C2C6C] hover:border flex justify-between mb-6 md:mb-0 rounded-md">
                    <div className='w-[45%]'>
                        <img src={project1} className='w-full h-full rounded-md' alt="Project" />
                    </div>
                    <div className='w-[55%] p-2 text-white'>
                        <h1 className='mt-[20px]'>Project Name : Chamera Shop  </h1>
                        <div className='flex justify-between mt-[50px]'>
                            <button data-aos="zoom-in" data-aos-duration="2000" className="btn btn-outline px-2 md:px-[10px] mr-1 btn-secondary rounded-md ">View Code</button>
                            <Link to={'https://toys-client-site.web.app/'}>
                                <button data-aos="zoom-in" data-aos-duration="2000" className="btn btn-outline btn-secondary px-[12px] md:px-[17px] rounded-md ">Live site</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="2000" className="bg-[#151C48] hover:bg-[#2C2C6C] hover:border flex justify-between mb-6 md:mb-0 rounded-md">
                    <div className='w-[45%]'>
                        <img src={project2} className='w-full h-full rounded-md' alt="Project" />
                    </div>
                    <div className='w-[55%] p-2 text-white'>
                        <h1 className='mt-[20px]'>Project Name : Chef Recipe Hunting</h1>
                        <div className='flex justify-between mt-[50px]'>
                            <button data-aos="zoom-in" data-aos-duration="2000" className="btn btn-outline px-2 md:px-[10px] mr-1 btn-secondary rounded-md ">View Code</button>
                            <Link to={'https://chef-recipe-hunting-assignment.web.app/'}>
                                <button data-aos="zoom-in" data-aos-duration="2000" className="btn btn-outline btn-secondary px-[12px] md:px-[17px] rounded-md ">Live site</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="2000" className="bg-[#151C48] hover:bg-[#2C2C6C] hover:border flex justify-between mb-6 md:mb-0 rounded-md">
                    <div className='w-[45%]'>
                        <img src={project3} className='w-full h-full rounded-md' alt="Project" />
                    </div>
                    <div className='w-[55%] p-2 text-white'>
                        <h1 className='mt-[20px]'>Project Name : Dream Jobs  </h1>
                        <div className='flex justify-between mt-[50px]'>
                            <button data-aos="zoom-in" data-aos-duration="2000" className="btn btn-outline px-2 md:px-[10px] mr-1 btn-secondary rounded-md ">View Code</button>
                            <Link to={'https://exquisite-valkyrie-d8709d.netlify.app/'}>
                                <button data-aos="zoom-in" data-aos-duration="2000" className="btn btn-outline btn-secondary px-[12px] md:px-[17px] rounded-md ">Live site</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="2000" className="bg-[#151C48] hover:bg-[#2C2C6C] hover:border flex justify-between mb-6 md:mb-0 rounded-md">
                    <div className='w-[45%]'>
                        <img src={project4} className='w-full h-full rounded-md' alt="Project" />
                    </div>
                    <div className='w-[55%] p-2 text-white'>
                        <h1 className='mt-[20px]'>Project Name : Knowledge  </h1>
                        <div className='flex justify-between mt-[50px]'>
                            <button data-aos="zoom-in" data-aos-duration="2000" className="btn btn-outline px-2 md:px-[10px] mr-1 btn-secondary rounded-md ">View Code</button>
                            <Link to={'https://transcendent-youtiao-4e253a.netlify.app/'}>
                                <button data-aos="zoom-in" data-aos-duration="2000" className="btn btn-outline btn-secondary px-[12px] md:px-[17px] rounded-md ">Live site</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="2000" className="bg-[#151C48] hover:bg-[#2C2C6C] hover:border flex justify-between mb-6 md:mb-0 rounded-md">
                    <div className='w-[45%]'>
                        <img src={project5} className='w-full h-full rounded-md' alt="Project" />
                    </div>
                    <div className='w-[55%] p-2 text-white'>
                        <h1 className='mt-[20px]'>Project Name : LoopLab  </h1>
                        <div className='flex justify-between mt-[50px]'>
                            <button data-aos="zoom-in" data-aos-duration="2000" className="btn btn-outline px-2 md:px-[10px] mr-1 btn-secondary rounded-md ">View Code</button>
                            <Link to={'https://morsalin102666.github.io/project-1-repo/'}>
                                <button data-aos="zoom-in" data-aos-duration="2000" className="btn btn-outline btn-secondary px-[12px] md:px-[17px] rounded-md ">Live site</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in"
                    data-aos-duration="2000" className="bg-[#151C48] hover:bg-[#2C2C6C] hover:border flex justify-between mb-6 md:mb-0 rounded-md">
                    <div className='w-[45%]'>
                        <img src={project6} className='w-full h-full rounded-md' alt="Project" />
                    </div>
                    <div className='w-[55%] p-2 text-white'>
                        <h1 className='mt-[20px]'>Project Name :  Mizuxe</h1>
                        <div className='flex justify-between mt-[50px]'>
                            <button data-aos="zoom-in" data-aos-duration="2000" className="btn btn-outline px-2 md:px-[10px] mr-1 btn-secondary rounded-md ">View Code</button>
                            <Link to={'https://morsalin102666.github.io/project-00-repo/'}>
                                <button data-aos="zoom-in" data-aos-duration="2000" className="btn btn-outline btn-secondary px-[12px] md:px-[17px] rounded-md ">Live site</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;