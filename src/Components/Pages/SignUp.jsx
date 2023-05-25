import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";


const SignUp = () => {
  return (
    <div>
     <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>
     <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
<h1 className="text-5xl font-bold">SignUp now!</h1>
<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<form className="card-body">
 <div className="form-control">
   <label className="label">
     <span className="label-text">Email</span>
   </label>
   <input type="text" placeholder="email" className="input input-bordered" />
 </div>
 <div className="form-control">
   <label className="label">
     <span className="label-text">Password</span>
   </label>
   <input type="text" placeholder="password" className="input input-bordered" />
   <label className="label">
     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
   </label>
 </div>
 <div className="form-control mt-2">
 <input type="submit" className="w-full border-b-2 text-center rounded-lg font-semibold hover:border-slate-800 p-2 hover:bg-slate-800 hover:text-yellow-500 duration-500 mx-auto bg-slate-100 border-yellow-600" value='SignUp'/>
 </div>
 <Link to='/login' className="text-yellow-600 text-center hover:underline">Already have an account? <span className="font-bold ">Please Login</span></Link>
 <h4 className="text-center">Or Sign Up with</h4>
 <div className="flex justify-center gap-1">
     <FaFacebook className="hover:bg-[#cc8a0eac] w-12 h-12 rounded-full p-2 duration-500"/>
     <FaGoogle className="hover:bg-[#cc8a0eac] w-12 h-12 rounded-full p-2 duration-500"/>
     <FaGithub className="hover:bg-[#cc8a0eac] w-12 h-12 rounded-full p-2 duration-500"/>
 </div>
</form>
</div>
</div>
</div> 
 </div>
  );
};

export default SignUp;
