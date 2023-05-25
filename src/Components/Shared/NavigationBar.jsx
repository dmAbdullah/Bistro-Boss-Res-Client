import { Link } from "react-router-dom";

const NavigationBar = () => {
    const navOptions= <>
    <li><Link to='/'>HOME</Link></li>
        <li><Link to='/menu'>OUR MENU</Link></li>
        <li><Link to='/order/salad'>OUR ORDER</Link></li>
        <li><Link>DASHBOARD</Link></li>
        <li><Link>CONTACT US</Link></li>
        </>
    return (
        <div className="">
        <div className="fixed z-20 navbar hover:bg-slate-400 bg-black bg-opacity-10 flex justify-between max-w-screen-xl glass duration-500">
  <div className="">
    <div className="dropdown">
      <label tabIndex={0} className="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {navOptions}
      </ul>
    </div>
    <Link to='/' className="normal-case font-bold text-xl text-white p-3">Bistro Boss</Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 text-white">
    {navOptions}
    </ul>
  </div>
  <div className="gap-5 text-white">
  <Link to='/login'>LOGIN</Link>
  <div className="avatar">
  <div className="w-16 mask mask-squircle">
    <img title="name" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
  </div>
</div>
</div>
</div>
  </div>
    );
};

export default NavigationBar;