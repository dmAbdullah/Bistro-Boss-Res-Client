import ShopCard from "./ShopCard";

const ShopTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10">
            {
                items.map(item=><ShopCard key={item._id} item={item}/>)
            }
            </div>
    );
};

export default ShopTab;