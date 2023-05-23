import { useEffect } from "react";
import SectionTitle from "../Shaired/SectionTitle";
import { useState } from "react";
import MenuItem from "../Shaired/MenuItem";

const Menu = () => {
const [menu, setMenu] = useState([]);
useEffect(() => {
    fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)
        })
}, [])

    return (
        <section>
            <SectionTitle
            heading="FROM OUR MENU"
            subHeading="Popular Items"></SectionTitle>
            <div className=" mb-10 grid md:grid-cols-2 gap-5">
            {
                    menu.map(item => <MenuItem
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

export default Menu;