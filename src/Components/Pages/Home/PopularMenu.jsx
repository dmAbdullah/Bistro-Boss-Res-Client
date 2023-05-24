import SectionTitle from "../../Shared/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {
    const [menu]= useMenu();
    const popular = menu.filter(item=> item.category === "popular");

    return (
        <section>
            <SectionTitle
            heading="FROM OUR MENU"
            subHeading="Popular Items"></SectionTitle>
            <div className=" mb-10 grid md:grid-cols-2 gap-5">
            {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
            <button className="mb-10 border-b-2 rounded-lg font-semibold border-slate-800 p-2 hover:bg-slate-800 hover:text-yellow-500 duration-500 ">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;