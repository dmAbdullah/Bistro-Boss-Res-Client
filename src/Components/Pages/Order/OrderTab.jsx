import OrderCard from "./OrderCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10">
            {
                items.map(item=><OrderCard key={item._id} item={item}/>)
            }
            </div>
    );
};

export default OrderTab;