import SectionTitle from "../../Shared/SectionTitle";
import img from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="hero bg-fixed" style={{ backgroundImage: `url(${img})` }}>
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-neutral-content">
        <div>
          <section>
            <SectionTitle
              subHeading="Check it out"
              heading="FROM OUR MENU"
            ></SectionTitle>
          </section>
          <div className="md:flex gap-8 justify-center items-center px-20 py-10">
            <img className="w-96" src={img} alt="" />
            <div className="mt-5 md:mt-0">
              <p>March 20, 2023</p>
              <p>WHERE CAN I GET SOME?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className=" mt-5 border-b-2 rounded-lg font-semibold border-slate-800 p-2 hover:bg-slate-800 hover:text-yellow-500 duration-500 ">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
