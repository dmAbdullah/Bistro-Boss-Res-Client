import img from "../../../assets/home/chef-service.jpg"
const About = () => {
    return (
        <div className="hero mb-10 bg-fixed" style={{ backgroundImage: `url(${img})` }}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content p-10">
          <div className=" bg-white bg-opacity-70 text-black p-5">
            <h1 className="mb-5 text-3xl font-bold font-mono">Bistro Boss</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            
          </div>
        </div>
      </div>
    );
};

export default About;