import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import MainPage from "./components/mainPage/MainPage";
import LoginPage from "./components/loginPage/LoginPage";
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
import RoleRedirect from "./components/roleRedirect/RoleRedirect";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import RegisterProcess from "./components/registerPage/RegisterProcess";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <RoleRedirect />
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
      element: <RegisterProcess />,
    },
    {
      path: "/clientid",
      element: (
        <ProtectedRoute allowedRole={['Client']}>
          <LayoutLogged>
            <ClientPage />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/profesorid",
      element: (
        <ProtectedRoute allowedRole={['Trainer']}>
          <LayoutLogged>
            <ProfessorPage />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/adminid",
      element: (
        <ProtectedRoute allowedRole={['Admin']}>
          <LayoutLogged>
            <AdminPage />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/adminid/user-center",
      element: (
        <ProtectedRoute allowedRole={['Admin']}>
          <LayoutLogged>
            <UserCenter />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/adminid/assing-shift",
      element: (
        <ProtectedRoute allowedRole={['Admin']}>
          <LayoutLogged>
            <AssingShiftsPage />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/clientid/get-turn",
      element: (
        <ProtectedRoute allowedRole={['Client']}>
          <LayoutLogged>
            <GetTurn />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/clientid/nutritional-plan",
      element: (
        <ProtectedRoute allowedRole={['Client']}>
          <LayoutLogged>
            <NutritionalPlan />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/clientid/routine",
      element: (
        <ProtectedRoute allowedRole={['Client']}>
          <LayoutLogged>
            <Routines />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/profesorid/assing-nutritional-plan",
      element: (
        <ProtectedRoute allowedRole={['Trainer']}>
          <LayoutLogged>
            <AssingNutricionalPlan />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/profesorid/assing-routine",
      element: (
        <ProtectedRoute allowedRole={['Trainer']}>
          <LayoutLogged>
            <AssingRoutine />
          </LayoutLogged>
        </ProtectedRoute>
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
