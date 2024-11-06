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
import ContactPage from "./components/contactPage/ContactPage";
import ManageLocations from "./components/manageLocations/ManageLocations";
import SetttingsPageTrainer from "./components/settingsPage/SetttingsPageTrainer";
import SettingsPageClient from "./components/settingsPage/SettingsPageClient";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      element:
        (
          <ProtectedRoute allowedRole={null}>
            <LoginPage />
          </ProtectedRoute>
        ),
    },
    {
      path: "/register/:step",
      element: (
        <ProtectedRoute allowedRole={null}>
          <RegisterProcess />
        </ProtectedRoute>
      )
    },
    {
      path: "/client",
      element: (
        <ProtectedRoute allowedRole={['Client']}>
          <LayoutLogged>
            <ClientPage />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/profesor",
      element: (
        <ProtectedRoute allowedRole={['Trainer']}>
          <LayoutLogged>
            <ProfessorPage />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute allowedRole={['Admin']}>
          <LayoutLogged>
            <AdminPage />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/user-center",
      element: (
        <ProtectedRoute allowedRole={['Admin']}>
          <LayoutLogged>
            <UserCenter />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/assing-shift",
      element: (
        <ProtectedRoute allowedRole={['Admin']}>
          <LayoutLogged>
            <AssingShiftsPage />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/manage-locations",
      element: (
        <ProtectedRoute allowedRole={['Admin']}>
          <LayoutLogged>
            <ManageLocations />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/client/get-turn",
      element: (
        <ProtectedRoute allowedRole={['Client']}>
          <LayoutLogged>
            <GetTurn />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/client/nutritional-plan",
      element: (
        <ProtectedRoute allowedRole={['Client']}>
          <LayoutLogged>
            <NutritionalPlan />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/client/routine",
      element: (
        <ProtectedRoute allowedRole={['Client']}>
          <LayoutLogged>
            <Routines />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    ,
    {
      path: "/client/settings",
      element: (
        <ProtectedRoute allowedRole={['Client']}>
          <LayoutLogged>
            <SettingsPageClient />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/profesor/assing-nutritional-plan",
      element: (
        <ProtectedRoute allowedRole={['Trainer']}>
          <LayoutLogged>
            <AssingNutricionalPlan />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/profesor/assing-routine",
      element: (
        <ProtectedRoute allowedRole={['Trainer']}>
          <LayoutLogged>
            <AssingRoutine />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    ,
    {
      path: "/profesor/settings",
      element: (
        <ProtectedRoute allowedRole={['Trainer']}>
          <LayoutLogged>
            <SetttingsPageTrainer />
          </LayoutLogged>
        </ProtectedRoute>
      ),
    },
    {
      path: "/contact",
      element: (
        <ContactPage />
      )
    },
    {
      path: "*",
      element: <NotFound />,
    },

  ]);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce} />

      <RouterProvider router={router} />
    </>
  );
}

export default App;