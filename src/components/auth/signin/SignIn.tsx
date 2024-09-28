import Image from "../../module/Image"
import SignUp from "../../../assets/signup.png"
import icon2 from "../../../assets/icon2.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { login } from "../../../redux/reducer/authSlice";
import { useDispatch } from 'react-redux';
import { login as apiLogin } from '../../../services/authapi';
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const token = await apiLogin(email, password);
      dispatch(login(token));
      // console.log(token,"token")
      // Redirect to dashboard
      if (token !== undefined) {
        navigate("/")
      }


    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-screen ">

        <Image imageUrl={SignUp} widthData="100%" />
        <div className="bg-blue-800 ">
          <div className="flex items-center flex-col justify-center h-screen ">
            <p className="text-3xl font-semibold mb-5 text-white"> Welcome TO </p>
            <p className="text-3xl font-semibold mb-5 text-white"> User Management System </p>

            <div className="bg-white-40 shadow-md p-5 rounded md:w-6/12 w-[80%]">
              <div className="m-auto w-[50%]">
                <Image imageUrl={icon2} widthData="90%" />
              </div>

              <form onSubmit={handleSubmit}>
                <div>
                  <label className="text-white">Enter the Email</label><br />
                  <input type="email" className="w-full rounded p-1 outline-none" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="mt-3">
                  <label className="text-white">Enter the Password</label><br />
                  <input type="password" className="w-full rounded p-1 outline-none" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <button type="submit" className="bg-blue-700 text-white w-full p-1 rounded mt-5">
                  Sign In
                </button>
              </form>
              <Link to="/signUp"><p className="text-end text-[13px]"><span className="text-zinc-100">No Account? </span> <span className="text-blue-900">Sign up</span></p></Link>



            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn