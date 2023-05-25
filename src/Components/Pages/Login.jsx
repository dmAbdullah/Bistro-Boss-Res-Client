import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const captchaRef= useRef(null);
    const [disabled, setDisabled]= useState(true);

const {signIn} = useContext(AuthContext);

    useEffect(() =>{
        loadCaptchaEnginge(6)
    },[])

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password);
    .then(result => {
        const user = result.user
        console.log(user);
    })
  }

const handleValidateCaptcha= () =>{
  const user_captcha_value = captchaRef.current.value;

  if (validateCaptcha(user_captcha_value)) {
    setDisabled(false)
    alert('Captcha Matched');
}

else {
    alert('Captcha Does Not Match');
    setDisabled(true)
}
}

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered" required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered" required
                />
                  <label className="label">
                  <Link className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate/>
                </label>
                <input
                  ref={captchaRef}
                  type="text"
                  placeholder="type the captcha"
                  name="captcha"
                  className="input input-bordered" required
                />
                <button onClick={handleValidateCaptcha}  className="btn btn-xs btn-outline mt-2 w-5/12">Validate</button>
              </div>
              <div className="form-control mt-2">
                <input
                  type="submit"
                  disabled={disabled}
                  className="w-full border-b-2 text-center rounded-lg font-semibold hover:border-slate-800 p-2 hover:bg-slate-800 hover:text-yellow-500 duration-500 mx-auto bg-slate-100 border-yellow-600"
                  value="Login"
                />
              </div>
              <Link
                to="/signUp"
                className="text-yellow-600 text-center hover:underline"
              >
                New here?{" "}
                <span className="font-bold ">Create a New Account</span>
              </Link>
              <h4 className="text-center">Or Login with</h4>
              <div className="flex justify-center gap-1">
                <FaFacebook className="hover:bg-[#cc8a0eac] w-12 h-12 rounded-full p-2 duration-500" />
                <FaGoogle className="hover:bg-[#cc8a0eac] w-12 h-12 rounded-full p-2 duration-500" />
                <FaGithub className="hover:bg-[#cc8a0eac] w-12 h-12 rounded-full p-2 duration-500" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

export default Login;
