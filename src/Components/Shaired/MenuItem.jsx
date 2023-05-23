
const MenuItem = ({item}) => {
    const {name, recipe, image, price}=item;
    console.log(name);
    return (
        <div className="text-black flex gap-5 p-2">
            <img className="md:w-[100px] w-36 rounded-b-full rounded-r-full" src={image} alt="" />
           <div>
           <h3 className="uppercase">{name}-----------------</h3>
            <p>{recipe}</p>
        </div>
        <p className="text-orange-600">${price}</p>
           </div>
    );
};

export default MenuItem;