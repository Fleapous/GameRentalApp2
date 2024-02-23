import { Home } from "./Pages/Home/Home";
import { AboutMe } from "./Pages/AboutMe/AboutMe";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import { SignOut } from "./components/SignOut";
import Admin from "./Pages/Admin/Admin";
import { GameAdmin } from "./Pages/Admin/GameAdmin/GameAdmin";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: 'AboutMe',
    element: <AboutMe />
  },
  {
    path: 'Login',
    element: <Login />
  },
  {
    path: 'Register',
    element: <Register />
  },
  {
    path: 'SignOut',
    element: <SignOut />
  },
];

export default AppRoutes;
