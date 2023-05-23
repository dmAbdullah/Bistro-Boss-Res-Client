import { Outlet } from "react-router-dom";
import Footer from "../Shaired/Footer";
import NavigationBar from "../Shaired/NavigationBar";

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;