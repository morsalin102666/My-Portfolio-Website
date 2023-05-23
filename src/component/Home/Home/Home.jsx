import Exprience from "../../Exprience/Exprience";
import Project from "../../Project/Project";
import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Exprience> </Exprience>
            <Project></Project>
        </div>
    );
};

export default Home;