import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './components/layout/Layout';
import MainPage from './components/mainPage/MainPage';
import LoginPage from './components/loginPage/LoginPage';
import RegisterPage from './components/registerPage/RegisterPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <MainPage />
        </Layout>
      )
    },
    {
      path: "/login",
      element: (
        <LoginPage />
      )
    },
    {
      path: "/register",
      element: (
        <RegisterPage />
      )
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
