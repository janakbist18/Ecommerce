import { Link } from "react-router-dom";

const Regsiter = () => {
  return (
    <div className="max-w-xl mx-auto my-18 border-slate-300 shadow p-10 rounded-md">
      <h1 className="text-3xl font-semibold text-slate-800 mb-4">Register</h1>

      <form className="space-y-4">
        {/* first name + last name */}
        <div className="flex gap-4 ">
          <div className="flex-1">
            <label htmlFor="firstname">First Name</label>
            <input className="w-full"  type="text" id="firstname" placeholder="Enter your first name" />
          </div>
          <div className="flex-1">
            <label htmlFor="lastname">Last Name</label>
            <input className="w-full" type="text" id="lastname" placeholder="Enter your last name" />
          </div>
        </div>

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

        {/* conform password */}
        <div>
          <label htmlFor="conform_password">Password</label>
          <input className="w-full" type="password" id="conform_password" placeholder="Enter your password again" />
        </div>

        <button className="btn btn-primary w-full">Register</button>

        <p className="space-x-1 mt-3">
          <span className="text-slate-700 text-sm">Already have an account?</span>
           <Link to= "/login" className="text-teal-400 underline cursor-pointer">Login</Link>
        </p>


      </form>
    </div>
  );
};
export default Regsiter;