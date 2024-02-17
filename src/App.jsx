import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Product/Products";
import Cart from "./components/Cart/Cart";
import LayoutRoutes from "./Layout/LayoutRoutes";
import ProductOne from "./components/ProductOne/ProductOne";
import NoutFound from "./components/Noutfound/NoutFound";
import SignIn from "./components/Login/SignIn";
import SiginUp from "./components/Login/SiginUp";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<LayoutRoutes />}>
        <Route path="*" element={<NoutFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productid" element={<ProductOne />} />
        <Route path="/loginSignIn" element={<SignIn />} />
        <Route path="/loginSignUp" element={<SiginUp />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
