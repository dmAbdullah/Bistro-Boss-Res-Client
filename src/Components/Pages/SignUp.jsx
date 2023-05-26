import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile}= useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => { 
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser= result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoUrl)
            .then(() => {
                console.log('user profile info updated');
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/')
              })
              .catch((error) => {
                console.log(error)
              });
        })
    };
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
<form onSubmit={handleSubmit(onSubmit)} className="card-body">
 <div className="form-control">
   <label className="label">
     <span className="label-text">Name</span>
   </label>
   <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
   {errors.name && <span className="text-red-500">Name is required</span>}
 </div>
 <div className="form-control">
   <label className="label">
     <span className="label-text">Email</span>
   </label>
   <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
   {errors.email && <span className="text-red-500">Email is required</span>}
 </div>
 <div className="form-control">
   <label className="label">
     <span className="label-text">Photo Url</span>
   </label>
   <input type="url" {...register("photoUrl", { required: true })} placeholder="photo url" className="input input-bordered" />
   {errors.PhotoUrl && <span className="text-red-500">Photo Url required</span>}
 </div>
 <div className="form-control">
   <label className="label">
     <span className="label-text">Password</span>
   </label>
   <input type="password" placeholder="password" {...register("password", { 
    required: true, 
    minLength: 6, 
    maxLength: 18,
    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
    })}  className="input input-bordered" />
   {errors.password?.type === 'required' && <p className="text-red-500">password is required</p>}
   {errors.password?.type === 'minLength' && <p className="text-red-500">password is required min 6 character max: 18</p>}
   {errors.password?.type === 'maxLength' && <p className="text-red-500">password is required max: 18 character long</p>}
   {errors.password?.type === 'pattern' && <p className="text-red-500">password must have one uppercase one lowercase and one special character</p>}
 </div>
 <div className="form-control mt-6">
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
