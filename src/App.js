import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";
import { productsAndCartLoader } from "./loader/ProductsandCart";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Shipping from "./components/Shipping/Shipping";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        { path: "/about", element: <About></About> },
        {
          path: "/inventory",
          element: (
            <PrivateRoute>
              <Inventory></Inventory>
            </PrivateRoute>
          ),
        },
        {
          path: "/shipping",
          element: (
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          ),
        },
        { path: "/login", element: <LogIn></LogIn> },
        { path: "/signup", element: <SignUp></SignUp> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
