import { Helmet } from "react-helmet-async";
import About from "./About";
import Banner from "./Banner";
import CallUs from "./CallUs";
import Category from "./Category";
import Featured from "./Featured";
import Menu from "./PopularMenu";
import Recommends from "./Recommends";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div className="">
            <Helmet>
             <title>Bistro Boss | Home</title></Helmet>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <Menu></Menu>
            <CallUs></CallUs>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;