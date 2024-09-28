import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/reducer/authSlice';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const signOut = () => {
        dispatch(logout());
        navigate("/signIn")
      };
  return (
    <div className="py-3 px-6 shadow-sm flex justify-between items-center">
    <p className='text-center text-4xl text-zinc-800'>User Managment Dashboard </p>
     <p className='text-blue-600 cursor' onClick={()=>signOut()}>Logout</p>   
  </div>
  )
}

export default Header