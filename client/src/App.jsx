import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Page from "./pages/Single";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss";


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post/:id", element: <Page /> },
      { path: "/write", element: <Write /> },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/page",
    element: <Page />,
  },
  {
    path: "/login",
    element: <Login   />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
