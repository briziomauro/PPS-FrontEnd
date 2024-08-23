import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './components/layout/Layout';
import MainPage from './components/mainPage/MainPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <MainPage />
        </Layout>
      ),
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App
