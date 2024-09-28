import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/reducer/authSlice';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const signOut = () => {
        dispatch(logout());
        navigate("/signIn");
      };
  return (
    <div className="py-3 px-6 shadow-sm flex justify-between items-center bg-zinc-800 text-white">
    <p className='text-center md:text-4xl text-xl  text-white'>User Managment Dashboard </p>
     <button className='text-blue-600 cursor bg-white p-2 rounded' onClick={()=>signOut()}>Logout</button>   
  </div>
  )
}

export default Header