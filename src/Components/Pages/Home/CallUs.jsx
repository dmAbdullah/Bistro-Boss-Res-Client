import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const CallUs = () => {
    return (
        <div className="mb-10 text-center gap-2 justify-center font-mono text-3xl font-bold md:flex bg-gradient-to-r from-blue-400 via-orange-500 to-blue-400 text-white p-10">
            <h3 data-aos="fade-right" className='duration-300'>Call Us: </h3>
            <h3 data-aos="fade-left" className='duration-300'> +88 0192345678910</h3>
        </div>
    );
};

export default CallUs;