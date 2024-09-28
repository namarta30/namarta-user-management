import Image from "../../module/Image"
import Sign from "../../../assets/signup.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { register as apiLogin } from '../../../services/authapi';
import { useDispatch } from "react-redux";
import { login } from "../../../redux/reducer/authSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    email: 'eve.holt@reqres.in',
    password: 'pistol',
    name: "Eve"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password, name } = formData;
    if (!email || !password || !name) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const token = await apiLogin(formData.email, formData.password);
      dispatch(login(token));
      if (token !== undefined) {
        navigate("/")
      }

    } catch (error) {
      console.error(error);
    }
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-8 h-screen ">

        <Image imageUrl={Sign} widthData="100%" />
        <div className="bg-blue-800 ">
          <div className="flex items-center flex-col justify-center h-screen ">
            <p className="text-3xl font-semibold mb-5 text-white"> Welcome TO </p>
            <p className="text-3xl font-semibold mb-5 text-white"> User Management System </p>

            <div className="bg-white-40 shadow-md p-5 rounded w-6/12">

              <p className="text-center text-white text-2xl mb-2">Register Now</p>
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="text-white">Enter the Name</label><br />
                  <input type="text" className="w-full rounded p-1 outline-none" name="name" onChange={(e) => changeHandler(e)} value={formData.name} />
                </div>
                <div className="mt-3">
                  <label className="text-white">Enter the Email</label><br />
                  <input type="email" className="w-full rounded p-1 outline-none" name="email" onChange={(e) => changeHandler(e)} value={formData.email} />
                </div>
                <div className="mt-3">
                  <label className="text-white">Enter the Password</label><br />
                  <input type="password" className="w-full rounded p-1 outline-none" name="password" onChange={(e) => changeHandler(e)} value={formData.password} />
                </div>

                <button type="submit" className="bg-blue-700 text-white w-full p-1 rounded mt-5">
                  Sign Up
                </button>
              </form>
              <Link to="/signIn"><p className="text-end text-[13px]"><span className="text-zinc-100">Have Account? </span> <span className="text-blue-900">Sign in</span></p></Link>



            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp