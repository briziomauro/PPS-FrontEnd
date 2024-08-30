import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './components/layout/Layout';
import MainPage from './components/mainPage/MainPage';
import LoginPage from './components/loginPage/LoginPage';
import RegisterPage from './components/registerPage/RegisterPage';
import LayoutLogged from './components/layout/LayoutLogged';
import ClientPage from './components/clientPage/ClientPage';
import ProfessorPage from './components/professorPage/ProfessorPage';
import AdminPage from './components/adminPage/AdminPage';

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
      path: "/locations",
      element: (
        <></>
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
    {
      path: "/clientid",
      element: (
        <LayoutLogged>
          <ClientPage />
        </LayoutLogged>
      )
    },
    {
      path: "/profesorid",
      element: (
        <LayoutLogged>
          <ProfessorPage />
        </LayoutLogged>
      )
    },
    {
      path: "/adminid",
      element: (
        <LayoutLogged>
          <AdminPage />
        </LayoutLogged>
      )
    },
    {
      path: "/adminid/user-center",
      element: (
        <></>
      )
    },
    {
      path: "/adminid/assing-shift",
      element: (
        <></>
      )
    },
    {
      path: "/clientid/get-turn",
      element: (
        <></>
      )
    },
    {
      path: "/clientid/nutritional-plan",
      element: (
        <></>
      )
    },
    {
      path: "/clientid/routine",
      element: (
        <></>
      )
    },
    {
      path: "/profesorid/work-calendar",
      element: (
        <></>
      )
    },
    {
      path: "/profesorid/assing-nutritional-plan",
      element: (
        <></>
      )
    },
    {
      path: "/profesorid/assing-routine",
      element: (
        <></>
      )
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App
