import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './components/auth/signin/SignIn.tsx';
import SignUp from './components/auth/signup/SignUp.tsx';
import Dashboard from './components/pages/dashboard/Dashboard.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
       
        element: (
          <ProtectedRoute path="/"><Dashboard/></ProtectedRoute>
        )
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
