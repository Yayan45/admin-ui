import "./App.css";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
// import ErrorPage from "./pages/Error";
// import { Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BalancePage from "./pages/Balance";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
