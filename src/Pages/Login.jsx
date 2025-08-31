import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-xl mx-auto my-18 border-slate-300 shadow p-10 rounded-md">
      <h1 className="text-3xl font-semibold text-slate-800 mb-4">Login</h1>

      <form className="space-y-4">
        {/* first name + last name */}


        {/* email */}
        <div>
          <label htmlFor="email">Email</label>
          <input className="w-full" type="email" id="email" placeholder="Enter your last email" />
        </div>

        {/* password */}
        <div>
          <label htmlFor="password">Password</label>
          <input className="w-full" type="password" id="password" placeholder="Enter your password" />
        </div>



        <button className="btn btn-primary w-full">Login</button>

        <p className="space-x-1 mt-3">
          <span className="text-slate-700 text-sm">Do You have an account?</span>
           <Link to= "/login" className="text-teal-400 underline cursor-pointer">Register</Link>
        </p>


      </form>
    </div>
  );
};
export default Login;