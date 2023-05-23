import About from "./About";
import Banner from "./Banner";
import CallUs from "./CallUs";
import Category from "./Category";
import Featured from "./Featured";
import Menu from "./Menu";
import Recommends from "./Recommends";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <Menu></Menu>
            <CallUs></CallUs>
            <Recommends></Recommends>
            <Featured></Featured>
        </div>
    );
};

export default Home;