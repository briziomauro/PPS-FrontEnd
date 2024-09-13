import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import MainPage from "./components/mainPage/MainPage";
import LoginPage from "./components/loginPage/LoginPage";
import RegisterPage from "./components/registerPage/RegisterPage";
import LayoutLogged from "./components/layout/LayoutLogged";
import ClientPage from "./components/clientPage/ClientPage";
import ProfessorPage from "./components/professorPage/ProfessorPage";
import AdminPage from "./components/adminPage/AdminPage";
import LocationsPage from "./components/locationsPage/LocationsPage";
import UserCenter from "./components/userCenter/UserCenter";
import AssingShiftsPage from "./components/assingShiftsPage/AssingShiftsPage";
import NotFound from "./components/notFound/NotFound";
import AssingNutricionalPlan from "./components/assingNutricionalPlan/AssingNutricionalPlan";
import AssingRoutine from "./components/assingRoutine/AssingRoutine";
import GetTurn from "./components/getTurn/GetTurn";
import NutritionalPlan from "./components/nutritionalPlan/NutritionalPlan";
import Routines from "./components/routines/Routines";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <MainPage />
        </Layout>
      ),
    },
    {
      path: "/locations",
      element: <LocationsPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/clientid",
      element: (
        <LayoutLogged>
          <ClientPage />
        </LayoutLogged>
      ),
    },
    {
      path: "/profesorid",
      element: (
        <LayoutLogged>
          <ProfessorPage />
        </LayoutLogged>
      ),
    },
    {
      path: "/adminid",
      element: (
        <LayoutLogged>
          <AdminPage />
        </LayoutLogged>
      ),
    },
    {
      path: "/adminid/user-center",
      element: (
        <LayoutLogged>
          <UserCenter />
        </LayoutLogged>
      ),
    },
    {
      path: "/adminid/assing-shift",
      element: (
        <LayoutLogged>
          <AssingShiftsPage />
        </LayoutLogged>
      ),
    },
    {
      path: "/clientid/get-turn",
      element: (
        <LayoutLogged>
          <GetTurn />
        </LayoutLogged>
      ),
    },
    {
      path: "/clientid/nutritional-plan",
      element: (
        <LayoutLogged>
          <NutritionalPlan />
        </LayoutLogged>
      ),
    },
    {
      path: "/clientid/routine",
      element: (
        <LayoutLogged>
          <Routines />
        </LayoutLogged>
      ),
    },
    {
      path: "/profesorid/assing-nutritional-plan",
      element: (
        <LayoutLogged>
          <AssingNutricionalPlan />
        </LayoutLogged>
      ),
    },
    {
      path: "/profesorid/assing-routine",
      element: (
        <LayoutLogged>
          <AssingRoutine />
        </LayoutLogged>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
