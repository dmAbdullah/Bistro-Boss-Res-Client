import img1 from '../../../assets/menu/salad-bg.jpg'
import SectionTitle from '../../Shared/SectionTitle';
const Recommends = () => {
    return (
        <div >
            <section>
                <SectionTitle heading="CHEF RECOMMENDS" subHeading="Should Try">
                </SectionTitle>
            </section>
            <div className='md:flex md:flex-row gap-5 justify-between'>
            <div className='w-72 text-center bg-[#fafac2] mb-10 mx-auto'>
                <img src={img1} alt="" />
                <h4 className='text-xl font-bold mt-3'>Caeser Salad</h4>
                <p className='p-2'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className="text-center">
            <button className="mb-10 border-b-2 rounded-lg font-semibold border-slate-800 p-2 hover:bg-slate-800 hover:text-yellow-500 duration-500 ">Add to Cart</button>
            </div>
            </div>
            <div className='w-72 text-center bg-gray-300 mb-10 mx-auto'>
                <img src={img1} alt="" />
                <h4 className='text-xl font-bold mt-3'>Caeser Salad</h4>
                <p className='p-2'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className="text-center">
            <button className="mb-10 border-b-2 rounded-lg font-semibold border-slate-800 p-2 hover:bg-slate-800 hover:text-yellow-500 duration-500 ">Add to Cart</button>
            </div>
            </div>
            <div className='w-72 text-center bg-[#fafac2] mb-10 mx-auto'>
                <img src={img1} alt="" />
                <h4 className='text-xl font-bold mt-3'>Caeser Salad</h4>
                <p className='p-2'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className="text-center">
            <button className="mb-10 border-b-2 rounded-lg font-semibold border-slate-800 p-2 hover:bg-slate-800 hover:text-yellow-500 duration-500 ">Add to Cart</button>
            </div>
            </div>
            <div className='w-72 text-center bg-gray-300 mb-10 mx-auto'>
                <img src={img1} alt="" />
                <h4 className='text-xl font-bold mt-3'>Caeser Salad</h4>
                <p className='p-2'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <div className="text-center">
            <button className="mb-10 border-b-2 rounded-lg font-semibold border-slate-800 p-2 hover:bg-slate-800 hover:text-yellow-500 duration-500 ">Add to Cart</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Recommends;