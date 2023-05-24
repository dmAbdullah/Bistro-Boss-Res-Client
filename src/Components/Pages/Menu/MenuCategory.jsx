import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem";

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div>
             {title && <Cover img={coverImg} title={title}></Cover>}
             <div className=" m-10 grid md:grid-cols-2 gap-5">
            {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link
                 to={`/order/${title}`}>
            <button className="mb-10 border-b-2 rounded-lg font-semibold border-slate-800 p-2 hover:bg-slate-800 hover:text-yellow-500 duration-500 mx-auto">ORDER YOUR FAVORITE FOOD</button>
                </Link>
            </div>

        </div>
    );
};

export default MenuCategory;