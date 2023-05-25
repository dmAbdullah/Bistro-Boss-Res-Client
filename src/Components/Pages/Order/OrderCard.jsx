
const OrderCard = ({item}) => {
    const {name, image, price, recipe}= item;
    return (
        <div>
            <div className="card md:w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="" className="rounded-xl" />
    <p className='p-1 text-center text-white w-16 absolute bg-slate-700 right-0 mr-16 mb-32'>$ {price}</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
    <button className="mb-10 border-b-2 rounded-lg font-semibold hover:border-slate-800 p-2 hover:bg-slate-800 hover:text-yellow-500 duration-500 mx-auto bg-slate-100 border-yellow-600">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default OrderCard;