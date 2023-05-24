import { Helmet } from "react-helmet-async";
import orderCoverImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover";

const Shop = () => {

    return (
        <div>
            <Helmet>
             <title>Bistro Boss | Shop</title></Helmet>
             <Cover img={orderCoverImg} title="Our Shop"></Cover>

            
        </div>
    );
};

export default Shop;