import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavigationBar from "../Shared/NavigationBar";

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