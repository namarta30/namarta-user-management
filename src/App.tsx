import { Provider} from 'react-redux';
import './App.css'
import { Outlet, useLocation } from "react-router-dom";
import { store } from './redux/store/store';
import Header from './components/module/header/Header';

function App() {
  const location = useLocation();
  const noHeaderPaths = ['/signIn', '/signUp'];

  return (
    <Provider store={store}>
     {!noHeaderPaths.includes(location.pathname) && <Header />}
    <Outlet/>
    </Provider>
  )
}

export default App
