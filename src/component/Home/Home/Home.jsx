import { BannerHeader } from "../../BannerHeader/BannerHeader";
import Contact from "../../Contact/Contact";
import Exprience from "../../Exprience/Exprience";
import Footer from "../../Footer/Footer";
import GitHub from "../../GitHub/GitHub";
import Project from "../../Project/Project";
import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <div className='sticky z-10 top-0'>
                <BannerHeader></BannerHeader>
            </div>
            <Banner></Banner>
            <About></About>
            <Exprience> </Exprience>
            <Project></Project>
            <GitHub></GitHub>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;